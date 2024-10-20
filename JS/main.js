// const counters = document.querySelectorAll('.counter');
//     const speed = 200; // سرعة العداد

//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-target');
//             const count = +counter.innerText;

//             const increment = target / speed;

//             if (count < target) {
//                 counter.innerText = Math.ceil(count + increment);
//                 setTimeout(updateCount, 10);
//             } else {
//                 counter.innerText = target; // التأكد أن الرقم النهائي مضبوط
//             }
//         };

//         updateCount();
//     });

function startCounter(element, target) {
    let counter = 0;
    const interval = setInterval(() => {
        counter++;
        element.innerText = counter;
        if (counter === target) {
            clearInterval(interval);
        }
    }, 10); // سرعة العد
}

// Function to observe when the section is in view
function observeSection() {
    const section = document.querySelector('#client');
    const counters = [
        {element: document.getElementById('counter1'), target: 580},
        {element: document.getElementById('counter2'), target: 230},
        {element: document.getElementById('counter3'), target: 950},
        {element: document.getElementById('counter4'), target: 780}
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => startCounter(counter.element, counter.target));
                observer.unobserve(section); // عدم العد مرة أخرى بعد أول مشاهدة
            }
        });
    }, {threshold: 0.5}); // يبدأ العداد عند رؤية 50% من القسم

    observer.observe(section);
}

// Start observing when the DOM is ready
document.addEventListener('DOMContentLoaded', observeSection);