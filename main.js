const resultInput = document.getElementById('result');
    function handleButtonClick(event) {
        const buttonValue = event.target.innerText;
        
        if (buttonValue === '=') {
            try {
              
                resultInput.value = eval(resultInput.value);
            } catch (e) {
               
                resultInput.value = 'Error';
            }
        } else if (buttonValue === 'C') {
           
            resultInput.value = '';
        } else {
           
            resultInput.value += buttonValue;
        }
    }
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    function changeTheme(event) {
        const selectedTheme = event.target.id; 
        document.body.className = ''; 
        
        if (selectedTheme === 'theme-1') {
            document.body.classList.add('theme-1');
        } else if (selectedTheme === 'theme-2') {
            document.body.classList.add('theme-2');
        } else if (selectedTheme === 'theme-3') {
            document.body.classList.add('theme-3');
        }
    }

    document.querySelectorAll('input[name="theme"]').forEach(input => {
        input.addEventListener('change', changeTheme);
    });