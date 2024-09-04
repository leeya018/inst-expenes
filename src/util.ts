import { Task } from "./interfaces/Task";
import { User } from "./interfaces/User";

export const usersData: User[] = [
  { id: 1, name: "א.איוונוב" },
  { id: 2, name: "ג.מחמיד" },
  { id: 3, name: "ג.אבינועם" },
  { id: 4, name: "ר.אוסמן" },
  { id: 5, name: "ע.סולימן" },
  { id: 6, name: "ו.נויה" },
  { id: 7, name: "ב.אירנה" },
  { id: 8, name: "ח.שולמן" },
  { id: 9, name: "מ.רחיל" },
  { id: 10, name: "ב.ספר" },
  { id: 11, name: "ס.עדי" },
  { id: 12, name: "ד.סימחה" },
  { id: 13, name: "ק.דינה" },
  { id: 14, name: "נ.נועה" },
  { id: 15, name: "א.ליה" },
  { id: 16, name: "ש.בונן" },
  { id: 17, name: "ח.סיגל" },
  { id: 18, name: "ש.מרום" },
  { id: 19, name: "ת.מסטד" },
  { id: 20, name: "ב.אפרים" },
];
export const tasks: Task[] = [
  {
    id: 1,
    title:
      "אם היית יכול לחזור אחורה בזמן, לאיזה רגע בחייך היית רוצה לחזור ולמה?",
    completed: false,
  },
  {
    id: 2,
    title: "מה החלום הכי גדול שלך שלא סיפרת לאף אחד?",
    completed: false,
  },
  {
    id: 3,
    title: "מי היה האדם שהשפיע עליך הכי הרבה בחיים שלך, ובאיזו דרך?",
    completed: false,
  },
  {
    id: 4,
    title: "מהו המקום האהוב עליך ביותר בעולם, ומה הוא מסמל עבורך?",
    completed: false,
  },
  {
    id: 5,
    title: "מהו זיכרון הילדות שהכי חקוק בזיכרונך, ומדוע הוא משמעותי עבורך?",
    completed: false,
  },
  {
    id: 6,
    title: "אם היית יכול לשנות תכונה אחת באופי שלך, מה היית משנה ולמה?",
    completed: false,
  },
  { id: 7, title: "איזה הישג אישי שלך הכי חשוב לך ומדוע?", completed: false },
  {
    id: 8,
    title: "איך אתה מתמודד עם כישלונות ואכזבות? תוכל לשתף בסיפור אישי?",
    completed: false,
  },
  {
    id: 9,
    title:
      "מהו הערך הכי חשוב בעיניך בקשר עם אחרים, ואיך אתה מבטא אותו ביום-יום?",
    completed: false,
  },
  {
    id: 10,
    title:
      "אם היית יכול לבלות יום אחד עם כל אדם בעולם, חי או מת, עם מי היית בוחר ולמה?",
    completed: false,
  },
];

export const getDbUrl = () => {
  if (process.env.NODE_ENV) {
    return "https://console.firebase.google.com/u/0/project/apartments-invest/firestore";
  }
  return "https://console.firebase.google.com/u/0/project/dating-empire/firestore";
};

export const netlifyUrl = "https://app.netlify.com/sites/work-lee/deploys";
export const githubUrl = "https://github.com/leeya018/work";

const today = new Date();
export const curr_m = today.getMonth() + 1;
export const curr_y = today.getFullYear();
