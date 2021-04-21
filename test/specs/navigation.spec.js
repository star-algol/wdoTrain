import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
import CoursesPage from '../pageobjects/courses.page';

describe('Navigation', () => {
    let credentials = {
        username: "student@localcoding.us",
        password: "student789"
    };

    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(credentials.username, credentials.password);
    });

    it('course section opens', () => {
        ProfilePage.openCoursesSection();
        expect(CoursesPage.jsPracticeCourse).toBeExisting();
    });
});