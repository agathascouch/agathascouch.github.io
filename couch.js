let fed, placated, rearranged;
let happiness = 0;

let game_section, agatha, warning, meter, restart_section;

window.onload = () => {
    game_section = document.getElementById('game');
    agatha = document.getElementById('agatha');
    warning = document.getElementById('warning');
    meter = document.getElementById('happiness_meter_inner');
    restart_section = document.getElementById('restart');

    restart_section.style.display = 'none';

    update_happiness();
}

function feed() {
    if (fed) {
        update_happiness(-0.2);
        warn('Too much food!');
    }
    else {
        fed = true;
        update_happiness(0.2);
        warn('');
    }

    placated = false;
    rearranged = false;
}

function placate() {
    if (placated) {
        update_happiness(-0.2);
        warn('Too much placation!');
    }
    else {
        placated = true;
        update_happiness(0.2);
        warn('');
    }

    fed = false;
    rearranged = false;
}

function rearrange() {
    if (rearranged) {
        update_happiness(-0.2);
        warn('Too much rearranging!');
    }
    else {
        rearranged = true;
        update_happiness(0.2);
        warn('');
    }

    fed = false;
    placated = false;
}

function warn(message) {
    warning.innerHTML = message;
}

function update_happiness(amount = 0) {
    agatha.setAttribute('class', 'section');

    if (amount > 0) {
        agatha.setAttribute('class', 'section whoa pulse');
    }
    else if (amount < 0) {
        agatha.setAttribute('class', 'section whoa shaker');
    }

    happiness += amount;
    if (happiness < 0) happiness = 0;
    if (happiness > 1) happiness = 1;

    meter.style.width = (happiness * 100) + '%';

    if (happiness >= 1) {
        game_section.style.display = 'none';
        restart_section.style.display = 'flex';
        console.log(restart_section)
    }
}

function restart() {
    game_section.style.display = 'flex';
    restart_section.style.display = 'none';

    fed = false;
    placated = false;
    rearranged = false;
    happiness = 0;
    update_happiness();
}

function createElement(tag, class_name, text = '', parent = null) {
    let elem = document.createElement(tag);
    elem.setAttribute('class', class_name);

    elem.innerHTML = text;

    if (parent === null) document.body.appendChild(elem);
    else parent.appendChild(elem);

    return elem;
}