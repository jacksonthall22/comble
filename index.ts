console.log('Script loaded!');

const pinSequence: number[] = [1, 2, 3, 5, 9];
const userSequence: number[] = [];

function dotNumberFromId(id: string): number {
    return parseInt(id.split('-')[1]);
}

function dotMouseDown(e: HTMLDivElement) {
    console.log('Starting new sequence:');

    const n = dotNumberFromId(e.id);
    if (userSequence.includes(n)) {
        return
    }

    userSequence.push(n);
    console.log(n);


}

function dotMouseEnter(e: HTMLDivElement) {
    if (userSequence.length == 0) {
        return;
    }

    const n = dotNumberFromId(e.id);
    if (userSequence.includes(n)) {
        return
    }

    userSequence.push(n);
    console.log(n);
}

window.addEventListener('mouseup', function(event) {
    if (userSequence.length == 0) {
        return;
    }

    console.log('ended sequence: ' + userSequence);
    userSequence.length = 0;
})
