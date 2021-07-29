export default function availableChecklists() {
  const checklistListContent = document.querySelectorAll(
    ".checklistsListaContent"
  );
  const checkListTitleList = document.querySelectorAll(
    ".checklistListaTitle li"
  );
  const activeClass = "active";

  // Começar com Animação e primeiro conteúdo.
  // checklistListContent[0].classList.add(activeClass);
  // checkListTitleList[0].classList.add(activeClass);

  function activeChecklistTitle(index) {
    checkListTitleList.forEach((item) => {
      item.classList.remove(activeClass);
    });
    checkListTitleList[index].classList.add(activeClass);
  }

  function changeContent(index) {
    checklistListContent.forEach((item) => {
      item.classList.remove(activeClass);
    });
    checklistListContent[index].classList.add(activeClass);
    activeChecklistTitle(index);
    clearInterval(automaticContentInterval);
  }

  // let count = 0;
  // function automaticallyChangeContent() {
  //   checklistListContent[count].classList.add(activeClass);
  //   checkListTitleList[count].classList.add(activeClass);
  //   ++count;
  //   setTimeout(() => {
  //     checklistListContent[count - 1].classList.remove(activeClass);
  //     checkListTitleList[count - 1].classList.remove(activeClass);
  //   }, 1000);

  //   if (count > checkListTitleList.length - 1) {
  //     // clearInterval(automaticContentInterval);
  //     count = 0;
  //   }

  //   console.log(count);
  //   // console.log(checkListTitleList.length);
  // }

  // const automaticContentInterval = setInterval(
  //   automaticallyChangeContent,
  //   1000
  // );

  checkListTitleList.forEach((item, index) => {
    item.addEventListener("click", () => changeContent(index));
  });
}
