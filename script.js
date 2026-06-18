import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHgv7TlQGv_pcKEaCWk3d8fv9Aj3jcDC0",
  authDomain: "gridfal-feedback.firebaseapp.com",
  databaseURL: "https://gridfal-feedback-default-rtdb.firebaseio.com",
  projectId: "gridfal-feedback",
  storageBucket: "gridfal-feedback.firebasestorage.app",
  messagingSenderId: "538423514732",
  appId: "1:538423514732:web:a16f4cc5bfd95b70786a49"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
  satisfaction: document.querySelector('input[name="satisfaction"]:checked')?.value || "",
  ease: document.getElementById("ease").value,
  favorite: document.getElementById("favorite").value,
  bugFound: document.getElementById("bugFound").value,
  bugDetail: document.getElementById("bugDetail").value,
  speed: document.getElementById("speed").value,
  designScore: document.getElementById("designScore").value,
  mostUsedFeature: document.getElementById("mostUsedFeature").value,
  newFeature: document.getElementById("newFeature").value,
  suggestion: document.getElementById("suggestion").value,
  createdAt: new Date().toISOString()
};

  push(ref(db, "feedback"), data)
    .then(() => {
      alert("Terima kasih! Feedback berhasil dikirim.");
      document.getElementById("feedbackForm").reset();
    })
    .catch((err) => {
      alert("Gagal mengirim feedback");
      console.log(err);
    });
});
