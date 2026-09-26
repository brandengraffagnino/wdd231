const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseContainer = document.querySelector("#course-container");
const creditsDisplay = document.querySelector("#credits");
const courseDetails = document.querySelector("#course-details");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.textContent = `${course.subject} ${course.number}`;

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.addEventListener("click", () => {
            displayCourseDetails(course);
        });

        courseContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    creditsDisplay.textContent =
        `Total Credits: ${totalCredits}`;
}

function displayCourseDetails(course) {

    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>

        <h2>${course.subject} ${course.number}</h2>

        <h3>${course.title}</h3>

        <p><strong>Credits:</strong> ${course.credits}</p>

        <p><strong>Certificate:</strong> ${course.certificate}</p>

        <p>${course.description}</p>

        <p>
            <strong>Technologies:</strong>
            ${course.technology.join(", ")}
        </p>
    `;

    courseDetails.showModal();

    const closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseDetails.addEventListener("click", (event) => {

    const dialogDimensions =
        courseDetails.getBoundingClientRect();

    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        courseDetails.close();
    }
});

displayCourses(courses);

document.querySelector("#all-btn").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#cse-btn").addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);
});

document.querySelector("#wdd-btn").addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);
});