// ============================================================
//  Firebase 設定檔（學生端 index.html 與教師端 teacher.html 共用）
//  請依「設定說明.md」步驟，把 Firebase 主控台提供的設定貼到下方。
//  在還沒貼上之前，學生端會以「離線練習模式」運作（可正常遊玩，但不記錄資料）。
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyD23OUzbSu2Je_ljhuzZHPnF8sKNw8Elow",
  authDomain: "prime-challenge-9dafb.firebaseapp.com",
  projectId: "prime-challenge-9dafb",
  storageBucket: "prime-challenge-9dafb.firebasestorage.app",
  messagingSenderId: "1046327881501",
  appId: "1:1046327881501:web:e33a3f1c08334fb796fbf4"
};

// 可以登入教師 dashboard 的 Google 帳號（必須和 firestore.rules 裡的名單一致）
export const TEACHER_EMAILS = [
  "ghsghs1@gmail.com"
];

// 判斷是否已完成設定
export const isConfigured = !String(firebaseConfig.apiKey).startsWith("YOUR_");
