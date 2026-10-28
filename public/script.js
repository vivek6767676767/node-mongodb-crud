function showSection(section) {

    const content = document.getElementById("content");

    if (section === "student") {

        content.innerHTML = `
            <h2>Student Management</h2>
            <p>Student section selected.</p>
        `;

    }

    else if (section === "teacher") {

        content.innerHTML = `
            <h2>Teacher Management</h2>
            <p>Teacher section selected.</p>
        `;

    }

    else if (section === "course") {

        content.innerHTML = `
            <h2>Course Management</h2>
            <p>Course section selected.</p>
        `;

    }

    else if (section === "user") {

        content.innerHTML = `
            <h2>User Management</h2>
            <p>User section selected.</p>
        `;

    }

}