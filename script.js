document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  let noCount = 0;
  let yesPressed = false;

  const updateContent = () => {
    if (yesPressed) {
      root.innerHTML = `
        <div class="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-white">
          <img src="src/assets/kiss.gif" />
          <div class="text-4xl md:text-6xl font-bold my-4" style="text-shadow: 0 0 10px black;">
            Okayyy Yayyyyy Babiiii!!!!
          </div>

        </div>
      `;
    } else {
      const yesButtonSize = noCount * 20 + 16;

      const getNoButtonText = () => {
        const phrases = [
          "No",
          "Are you sure?",
          "Really sure?",
          "Think again!",
          "Last chance!",
          "Surely not?",
          "You might regret this!",
          "Give it another thought!",
          "Are you absolutely certain?",
          "This could be a mistake!",
          "Have a heart!",
          "Don't be so cold!",
          "Change of heart?",
          "Wouldn't you reconsider?",
          "Is that your final answer?",
          "You're breaking my heart ;(",
          "Is that your final answer?",
          "You're breaking my heart ;(",
          "Plsss? :( You're breaking my heart",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
      };

      root.innerHTML = `
        <div class="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-white">
          <img
            class="h-[230px] rounded-lg shadow-lg"
            id="main-gif"
            src="src/assets/Base Aki_Rose_2026-02-05-12-32-26.gif"
          />
          <h1 class="text-4xl md:text-6xl my-4 text-center" style="text-shadow: 0 0 10px black;">
            Will you be my Valentine?
          </h1>
          <div class="flex flex-wrap justify-center gap-2 items-center">
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4"
              style="font-size: ${yesButtonSize}px"
              id="yesButton"
            >
              Yes
            </button>
            <button
              class="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
              id="noButton"
            >
              ${noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      `;



      document.getElementById("yesButton").addEventListener("click", () => {
        yesPressed = true;
        updateContent();
      });

      document.getElementById("noButton").addEventListener("click", () => {
        noCount++;
        const mainGif = document.getElementById("main-gif");
        if (mainGif) {
          mainGif.src = "src/assets/Base Aki_Cry 3_2026-02-05-12-30-54.gif";
        }
        // Only update the button text, don't re-render the whole page
        document.getElementById("noButton").innerText = getNoButtonText();
        // Also update the 'Yes' button size
        const yesButton = document.getElementById("yesButton");
        if (yesButton) {
          yesButton.style.fontSize = `${noCount * 20 + 16}px`;
        }
      });
    }
  };

  updateContent();
});