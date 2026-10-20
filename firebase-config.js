// ============================================================
//  Firebase 設定檔（學生端 index.html 與教師端 teacher.html 共用）
//  請依「設定說明.md」步驟，把 Firebase 主控台提供的設定貼到下方。
//  在還沒貼上之前，學生端會以「離線練習模式」運作（可正常遊玩，但不記錄資料）。
// ============================================================

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 可以登入教師 dashboard 的 Google 帳號（必須和 firestore.rules 裡的名單一致）
export const TEACHER_EMAILS = [
  "YOUR_TEACHER_EMAIL@gmail.com"
];

// 判斷是否已完成設定
export const isConfigured = !String(firebaseConfig.apiKey).startsWith("YOUR_");
