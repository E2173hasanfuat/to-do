const btn = document.querySelector(".btn")
const toDoItem = document.querySelector(".input");
const array = document.querySelector(".array")
btn.addEventListener("click", () => {
    array.innerHTML += `<p class="box">
    <button class="btn-left" onclick="check(this)"><i class="far fa-check-square"></i></button>
    ${toDoItem.value}
    <button class="delete" onclick="Delete(this);"><i class="fas fa-trash-alt"></i></button>
    </p>`;
})
function check(element){
    element.parentNode.classList.add("line-t")
    // element.parentNode.classname = "line-t box"

}
function Delete(currentEl) {
    currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
    console.log(currentEl);
}