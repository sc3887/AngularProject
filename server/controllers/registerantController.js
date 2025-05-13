const express = require('express');
const router = express.Router();

const registerants = [
    { fullName: 'דבורה הררי', phone: '050-0123456', idNumber: '012012012', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'עליזה פרידמן', phone: '050-1112233', idNumber: '111222333', lessonId: 2, price: 120, isPaid: false },
    { fullName: 'חנה בן דוד', phone: '050-2223344', idNumber: '222333444', lessonId: 3, price: 150, isPaid: true },
    { fullName: 'אסתר ברזילי', phone: '050-3334455', idNumber: '333444555', lessonId: 1, price: 100, isPaid: false },
    { fullName: 'רבקה פיין', phone: '050-4445566', idNumber: '444555666', lessonId: 2, price: 120, isPaid: true },
    { fullName: 'נעמה הרשקוביץ', phone: '050-5556677', idNumber: '555666777', lessonId: 3, price: 150, isPaid: false },
    { fullName: 'דליה כהנוב', phone: '050-6667788', idNumber: '666777888', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'שולמית גולדשטיין', phone: '050-7778899', idNumber: '777888999', lessonId: 2, price: 120, isPaid: false },
    { fullName: 'איילה בן יעקב', phone: '050-8889900', idNumber: '888999000', lessonId: 3, price: 150, isPaid: true },
    { fullName: 'נעמי צוקרמן', phone: '050-9990011', idNumber: '999000111', lessonId: 1, price: 100, isPaid: false },
    { fullName: 'זהבה ליפשיץ', phone: '050-0001122', idNumber: '000111222', lessonId: 2, price: 120, isPaid: true },
    { fullName: 'אביגיל לוי', phone: '050-1234567', idNumber: '123123123', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'מרים כהן', phone: '050-2345678', idNumber: '234234234', lessonId: 2, price: 120, isPaid: false },
    { fullName: 'רות ברק', phone: '050-3456789', idNumber: '345345345', lessonId: 3, price: 150, isPaid: true },
    { fullName: 'ציפי רוזן', phone: '050-4567890', idNumber: '456456456', lessonId: 1, price: 100, isPaid: false },
    { fullName: 'גילה נחום', phone: '050-5678901', idNumber: '567567567', lessonId: 2, price: 120, isPaid: true },
    { fullName: 'אסנת אורן', phone: '050-6789012', idNumber: '678678678', lessonId: 3, price: 150, isPaid: false },
    { fullName: 'חגית גולד', phone: '050-7890123', idNumber: '789789789', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'שירה שרון', phone: '050-8901234', idNumber: '890890890', lessonId: 2, price: 120, isPaid: true },
    { fullName: 'אורית וולף', phone: '050-9012345', idNumber: '901901901', lessonId: 3, price: 150, isPaid: false },
    { fullName: 'דינה לוי', phone: '050-1122334', idNumber: '112112112', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'רונית כהן', phone: '050-2233445', idNumber: '223223223', lessonId: 2, price: 120, isPaid: false },
    { fullName: 'אפרת ברק', phone: '050-3344556', idNumber: '334334334', lessonId: 3, price: 150, isPaid: true },
    { fullName: 'ליאת רוזן', phone: '050-4455667', idNumber: '445445445', lessonId: 1, price: 100, isPaid: false },
    { fullName: 'איילת נחום', phone: '050-5566778', idNumber: '556556556', lessonId: 2, price: 120, isPaid: true },
    { fullName: 'שרית אורן', phone: '050-6677889', idNumber: '667667667', lessonId: 3, price: 150, isPaid: false },
    { fullName: 'מיכל גולד', phone: '050-7788990', idNumber: '778778778', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'יעל שרון', phone: '050-8899001', idNumber: '889889889', lessonId: 2, price: 120, isPaid: true },
    { fullName: 'חיה וולף', phone: '050-9900112', idNumber: '990990990', lessonId: 3, price: 150, isPaid: false },
    { fullName: 'אלישבע הררי', phone: '050-1011122', idNumber: '101101101', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'טובה לוי', phone: '050-2022233', idNumber: '202202202', lessonId: 2, price: 120, isPaid: false },
    { fullName: 'נעמה כהן', phone: '050-3033344', idNumber: '303303303', lessonId: 3, price: 150, isPaid: true },
    { fullName: 'עליזה ברק', phone: '050-4044455', idNumber: '404404404', lessonId: 1, price: 100, isPaid: false },
    { fullName: 'דליה רוזן', phone: '050-5055566', idNumber: '505505505', lessonId: 2, price: 120, isPaid: true },
    { fullName: 'שולמית נחום', phone: '050-6066677', idNumber: '606606606', lessonId: 3, price: 150, isPaid: false },
    { fullName: 'איילה אורן', phone: '050-7077788', idNumber: '707707707', lessonId: 1, price: 100, isPaid: true },
    { fullName: 'נעמי גולד', phone: '050-8088899', idNumber: '808808808', lessonId: 2, price: 120, isPaid: false },
    { fullName: 'זהבה שרון', phone: '050-9099900', idNumber: '909909909', lessonId: 3, price: 150, isPaid: true }
  ];   
  router.get('/', (req, res) => {
    res.json(registerants);
  });
    router.get('/:idNumber', (req, res) => {
        const registerantId = req.params.idNumber;
        const registerant = registerants.find(r => r.idNumber === registerantId);
        if (registerant) {
        res.json(registerant);
        } else {
        res.status(404).json({ error: "Registerant not found" });
        }
    });
    module.exports = router;