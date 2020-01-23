const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function displayTree(data) {
  let htmlRetStr = "<ul class='folder-container'>";
  for (let i = 0; i < data.length; i++) {
    if (data[i].folder) {
      htmlRetStr += `<li class="item folder" ><i class="material-icons folder-icons">folder</i>${data[i].title}</li>`;
      if (data[i].children) {
        htmlRetStr += displayTree(data[i].children);
      } else {
        htmlRetStr += '<li class="item-empty" >Folder is empty</li>'
      }
    } else {
      htmlRetStr += `<li class="item"><i class="material-icons file-icons">insert_drive_file</i>${data[i].title}</li>`
    }
  }
  htmlRetStr += '</ul>'
  return htmlRetStr;
}


function closeFolders(folder) {
  for (let i = 0; i < folder.length; i++) {
    let nested = [];
    nested[i] = folder[i].nextSibling;
    nested[i].classList.toggle('nested');
  }
}

rootNode.innerHTML = displayTree(structure);
let folder = document.querySelectorAll('.folder');

closeFolders(folder);

for (let i = 0; i < folder.length; i++) {
  folder[i].addEventListener('click', function () {
    this.nextSibling.classList.toggle('active');
    if (this.firstChild.innerHTML === 'folder_open') {
      this.firstChild.innerHTML = 'folder'
    } else {
      this.firstChild.innerHTML = 'folder_open'
    }
  })
}
