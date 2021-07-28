export default function availableChecklists() {
  const checklistListContent = document.querySelectorAll(
    ".checklistsListaContent"
  );
  const checkListTitleList = document.querySelectorAll(
    ".checklistListaTitle li"
  );
  const activeClass = "active";

  // Começar com Animação e primeiro conteúdo.
  checklistListContent[0].classList.add(activeClass);
  checkListTitleList[0].classList.add(activeClass);

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
  }

  checkListTitleList.forEach((item, index) => {
    item.addEventListener("click", () => changeContent(index));
  });
}
