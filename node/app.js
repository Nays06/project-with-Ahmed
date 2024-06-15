const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'media');
  },
  filename: (req, file, cb) => {
    cb(null, "profileImg.jpg");
  },
});
const upload = multer({ storage: storage });
app.use(express.static(path.join(__dirname, '../../project-with-Ahmed')));
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    const fileName = req.file.originalname;
    const fileExtension = path.extname(fileName);
    if (fileExtension === '.jpg' || fileExtension === '.png' || fileExtension === '.jpeg') {
      console.log('Загружен допустимый файл:', fileName);
      console.log('Файл успешно загружен');
      // res.json({ message: 'Файл успешно загружен' });
    } else {
      // res.json({ message: 'Недопустимый тип файла' });
    }
  } else {
    // res.json({ message: 'Ошибка загрузки файла' });
  }
});
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});