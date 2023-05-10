// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const charactersContainer = document.querySelector('.characters-container');

const createRow = function createGenericImgRowForDOM(rowIndex) {
  const newRow = document.createElement('div');

  newRow.className = 'row row-cols-2 row-cols-lg-4 align-self-center';
  newRow.id = `row-${rowIndex}`;

  charactersContainer.append(newRow);
};

const createImg = function createGenericImgForDOM(rowIndex, imgIndex) {
  const rowContainer = document.getElementById(`row-${rowIndex}`);
  const newCol = document.createElement('div');
  const newFigure = document.createElement('figure');
  const newImg = document.createElement('img');
  const newFigCaption = document.createElement('figcaption');
  const newSmall = document.createElement('small');

  newCol.className = 'col-auto p-1 character-container';

  newFigure.id = `img-${imgIndex}`;

  newImg.className = 'character-img';

  newFigCaption.className = 'character-name fw-bold';

  newSmall.className = 'character-title d-block fw-bold';

  newFigure.appendChild(newImg);
  newFigure.appendChild(newFigCaption);
  newFigure.appendChild(newSmall);

  newCol.append(newFigure);
  rowContainer.append(newCol);
};

const fillCharacterImg = function fillImgElementWithCharacterInfo({
  id,
  fullName,
  imageUrl,
  title,
}) {
  const characterFigure = document.getElementById(`img-${id}`);
  const characterImg = characterFigure.querySelector('img');
  const characterFigCaption = characterFigure.querySelector('figcaption');
  const characterSmall = characterFigure.querySelector('small');

  characterImg.src = `${imageUrl}`;
  characterImg.alt = `A potrait of ${fullName}`;
  characterFigCaption.textContent = `${fullName}`;
  characterSmall.textContent = `${title}`;
};

const fillCharacters = function getCharacterArrayFromURL() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let columnCount = 0;
      let rowCount = 0;
      createRow(rowCount);

      data.map((character) => {
        const { id } = character;

        createImg(rowCount, id);
        fillCharacterImg(character);
        columnCount += 1;

        if (columnCount % 4 === 0) {
          rowCount += 1;
          createRow(rowCount);
        }

        return character;
      });
    })
    .catch((error) => {
      charactersContainer.textContent = 'Error: Could not retrieve image data.';
      console.error('Request failed', error);
    });
};

fillCharacters();
