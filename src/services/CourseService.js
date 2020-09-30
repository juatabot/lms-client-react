const url = 'https://wbdv-generic-server.herokuapp.com/api/juat/courses';

export const CourseService = {
    findAllCourses: () =>
        fetch(url)
            .then(response => response.json()),

    findCourseById: (courseId) =>
        fetch(`${url}/${courseId}`)
            .then(response => response.json()),

    deleteCourse: (courseId) =>
        fetch(`${url}/${courseId}`, {
            method: "DELETE"
        })
            .then(response => response.json()),

    createCourse: (course) =>
        fetch(url, {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json()),

    updateCourse: (courseId, updatedCourse) =>
        fetch(`${url}/${courseId}`, {
            method: "PUT",
            body: JSON.stringify(updatedCourse),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
}