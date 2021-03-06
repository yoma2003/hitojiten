const selectCategory = () => {
  const categorySelectBox = document.querySelector(".category_select_box");
  const categoryListOpenBtn = document.querySelector(".category_list_open_btn");
  let isOpen = false;
  window.addEventListener("click", function(e) {
    if (isOpen == false && (e.target.closest('.category_list_open_btn'))) {
      categorySelectBox.classList.add("visible");
      categoryListOpenBtn.classList.add("clicked");
      isOpen = true;
    } else if (isOpen == true && (e.target.closest('.category_select_box') == null)) {
      reloadCheckedCategories();
      categorySelectBox.classList.remove("visible");
      categoryListOpenBtn.classList.remove("clicked");
      isOpen = false;
    }
  });
};

const reloadCheckedCategories = () => {
  const categoryCheckboxes = document.getElementsByClassName("category_checkbox");
  const checkedCategories = {};
  for(i = 0; i < categoryCheckboxes.length; i++) {
    if (categoryCheckboxes[i].checked) {
      const checkedCategoryId = categoryCheckboxes[i].value;
      const checkedCategoryName = categoryCheckboxes[i].nextElementSibling.innerHTML;
      checkedCategories[checkedCategoryId] = checkedCategoryName;
    }
  }
  const affiliationCategory = document.querySelector(".affiliation_category");
  let html ="";
  for(const [key, value] of Object.entries(checkedCategories)) {
    html += `<a href="/categories/${key}" class="selected_category">${value}</a> `;
  }
  affiliationCategory.innerHTML = html;
};

window.addEventListener("load", selectCategory);