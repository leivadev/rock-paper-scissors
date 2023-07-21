"strict mode";

const electionElements = document.querySelectorAll('img');

for (let i = 0; i < electionElements.length; i++) {
    const election = electionElements[i];
    election.addEventListener('click', function () {
        switch (i) {
            case 0:
                alert('you clicked rock!');
                break;
            case 1:
                alert('you clicked paper!');
                break;
            case 2:
                alert('you clicked scissors!');
                break;
        }
    });
}