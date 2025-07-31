document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach(sliderContainer => {
    const slider = sliderContainer.querySelector(".slider");
    const slides = sliderContainer.querySelectorAll(".slide");
    const prevBtn = sliderContainer.querySelector(".prev-btn");
    const nextBtn = sliderContainer.querySelector(".next-btn");

    // ボタンが存在しない場合はスキップ
    if (!prevBtn || !nextBtn || !slider || slides.length === 0) {
      return;
    }

    let currentIndex = 0;

    function updateSlider() {
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", e => {
      e.stopPropagation(); // イベントの伝播を停止
      e.preventDefault(); // デフォルトの動作を停止
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });

    nextBtn.addEventListener("click", e => {
      e.stopPropagation(); // イベントの伝播を停止
      e.preventDefault(); // デフォルトの動作を停止
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  const lastUpdatedElement = document.getElementById("last-updated");
  if (lastUpdatedElement) {
    const lastModified = new Date(document.lastModified);
    lastUpdatedElement.textContent = `最終更新日: ${lastModified.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  }

  const toggleButton = document.getElementById("toggle-qualifications");
  const content = document.getElementById("qualifications-content");

  toggleButton.addEventListener("click", () => {
    content.classList.toggle("hidden");
  });

  const definitionToggleButton = document.getElementById("toggle-definition");
  const definitionContent = document.getElementById("definition-content");

  definitionToggleButton.addEventListener("click", () => {
    definitionContent.classList.toggle("hidden");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');

  externalLinks.forEach(link => {
    link.addEventListener("click", e => {
      // スライダーボタンまたはその子要素がクリックされた場合は何もしない
      if (e.target.matches(".prev-btn, .next-btn") || e.target.closest(".prev-btn") || e.target.closest(".next-btn")) {
        return;
      }

      // イベントがスライダーコンテナ内のボタンから発生した場合も無視
      const sliderContainer = link.closest(".slider-container");
      if (
        sliderContainer &&
        (e.target.matches(".prev-btn, .next-btn") || e.target.closest(".prev-btn") || e.target.closest(".next-btn"))
      ) {
        return;
      }

      e.preventDefault(); // デフォルトの動作を停止

      // 確認ダイアログを表示
      const confirmPreview = confirm("新しくタブを表示させます。");

      if (confirmPreview) {
        // 新しいタブでリンクを開く
        window.open(link.href, "_blank");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const downloadLinks = document.querySelectorAll(".Download");

  downloadLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // デフォルトの動作を防ぐ
      const userConfirmed = confirm("ダウンロードを開始しますか？");
      if (userConfirmed) {
        window.location.href = link.href; // ユーザーが確認した場合にダウンロードを開始
      }
    });
  });
});
