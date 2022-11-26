const searchNumber = e => {
    const numberToCheck = document.querySelector('#enter-number').value;
    const container = document.querySelector('.list-container');
    const titleDom = container.childNodes[1];
    const numberParag = container.childNodes[3];
    numberParag.textContent = '';
    numberParag.classList.add('hide');
    const buildPremiersResult = array => {
        titleDom.textContent = `Voici les nombres premiers jusqu'à ${numberToCheck} :`;
        numberParag.classList.remove('hide');
        array.map((e,index) => {
            numberParag.textContent += index > 0 ? `, ${e}` : e;
        })
    }
    const findAllPremierNumbers = number => {
        const premierArray = [];
        for (let ind = 2; ind < number; ind++) {
            let newNumbPremier = true;
            for (let i = 2; i < ind; i++) {
                Number.isInteger(ind/i) && (newNumbPremier = false);
            }
            newNumbPremier && premierArray.push(ind);
        }
        console.log(premierArray);
        buildPremiersResult(premierArray);
    }
    e.preventDefault();
    let numberPremier = true;
    let diviseur = 0;
    if (numberToCheck > 1 && Number.isInteger(numberToCheck/1)) {
        for (let i = 2; i < numberToCheck; i++) {
            if (Number.isInteger(numberToCheck/i)) {
                numberPremier = false;
                diviseur = i;
                break;
            }
        }
        
        numberToCheck < 1000 ? findAllPremierNumbers(numberToCheck) : (titleDom.textContent = 'Il y en a trop, je ne peux vous donner la liste !!');

        document.querySelector('.result h2').textContent = `Le nombre ${numberToCheck} ${numberPremier ? 'est' : 'n\'est pas'} un nombre premier${numberPremier ? '.' : (', il est divisible par ' + diviseur)}`
    }
    document.querySelector('input[name="list-numbers"]').addEventListener('click',e => e.target.checked ? document.querySelector('.list-container').classList.remove('hide') : document.querySelector('.list-container').classList.add('hide'));
}

document.querySelector('.valid').addEventListener('click',searchNumber);