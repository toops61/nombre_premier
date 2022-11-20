const searchNumber = e => {
    const hideResult = () => document.querySelector('.result').classList.toggle('show');
    e.preventDefault();
    const numberToCheck = document.querySelector('#enter-number').value;
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
        const premierArray = [];
        if(numberToCheck < 500) for (let ind = 2; ind < numberToCheck; ind++) {
            let newNumbPremier = true;
            document.querySelector('.list-container p').classList.add('hide');
            for (let i = 2; i < ind; i++) {
                Number.isInteger(ind/i) && (newNumbPremier = false);
            }
            newNumbPremier && premierArray.push(ind);
        } else {
            document.querySelector('.list-container p').classList.remove('hide');
        }
        console.log(premierArray);
        document.querySelector('.result h2').textContent = `Le nombre ${numberToCheck} ${numberPremier ? 'est' : 'n\'est pas'} un nombre premier${numberPremier ? '.' : (', il est divisible par ' + diviseur)}`
        hideResult();
        setTimeout(() => {
            hideResult();
        }, 2000);
    }
    document.querySelector('input[name="list-numbers"]').addEventListener('click',e => e.target.checked ? document.querySelector('.list-container').classList.remove('hide') : document.querySelector('.list-container').classList.add('hide'));
}

document.querySelector('.valid').addEventListener('click',searchNumber);