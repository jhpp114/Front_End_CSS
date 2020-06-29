// Element Selector
let elementSelectorBtn = document.querySelector('.element_selector_btn');
// ID Selector
let id_selector_btn = document.querySelector('.id_selector_btn');
// Class Selector
let class_selector_btn = document.querySelector('.class_selector_btn');

const findParagraphToApply = () => {
    let parentNodes = document.querySelector('.element_selector');
    let paragraph = parentNodes.querySelector('p');
    return paragraph;
};

const findIdParagraph = () => {
    let paraentNode = document.querySelector('.id_selector');
    let paragraph = paraentNode.querySelector('p');
    let strongId = paragraph.querySelector('strong');
    return strongId
};

const findUnorderList = () => {
    let parentNode = document.querySelector('.class_selector');
    let unorderListNode = parentNode.querySelector('ul');
    let listNode = unorderListNode.querySelectorAll('li');
    return unorderListNode;
};

// class_selector_btn
class_selector_btn.onclick = () => {
    let unorderList = findUnorderList();
    let listElements = unorderList.querySelectorAll('li');
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].textContent = "I have no List style now";
    }
    unorderList.style.listStyle = "none";
};

// button for element selector
elementSelectorBtn.onclick= () => {
    let paragraph = findParagraphToApply();
    if (paragraph.style.color === "red") {
        paragraph.style.color = "black";
    } else {
        paragraph.style.color = "red";
    }
};

// now i need to find paragraph
id_selector_btn.onclick = () => {
    let strongId = findIdParagraph();
    if (strongId.style.color === "blue") {
        strongId.style.color = "black";
    } else {
        strongId.style.color = "blue";
    }
};