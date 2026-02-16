

const AUTH = {
  // Demo credentials (will be merged with saved users from localStorage)
  users: {
    teacher: {
      username: 'teacher',
      password: 'teacher123',
      role: 'teacher',
      name: 'Prof. Sarah Johnson',
      id: 'TEACHER001'
    },
    student1: {
      username: 'student1',
      password: 'student123',
      role: 'student',
      name: 'Alex Chen',
      id: 'STU001'
    },
    student2: {
      username: 'student2',
      password: 'student123',
      role: 'student',
      name: 'Maria Garcia',
      id: 'STU002'
    },
    student3: {
      username: 'student3',
      password: 'student123',
      role: 'student',
      name: 'Maria Garcia',
      id: 'STU003'
    }
  },

  // Initialize authentication system
  init() {
    // Load saved users from localStorage
    const savedUsers = localStorage.getItem('platformUsers');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      // Merge with existing demo users
      Object.assign(this.users, users);
    }

    // Check if user is already logged in
    const currentUser = this.getCurrentUser();
    if (currentUser && (window.location.pathname.includes('index.html') || window.location.pathname.includes('signup.html'))) {
      this.redirectToDashboard(currentUser.role);
    }
  },

  // Login function
  login(username, password, role) {
    const user = this.users[username];

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Incorrect password' };
    }

    if (user.role !== role) {
      return { success: false, message: `This account is not a ${role} account` };
    }

    // Store user session
    const sessionData = {
      username: user.username,
      role: user.role,
      name: user.name,
      id: user.id || 'TEACHER001',
      loginTime: new Date().toISOString()
    };

    localStorage.setItem('currentUser', JSON.stringify(sessionData));

    return { success: true, user: sessionData };
  },

  // Logout function
  logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  },

  // Get current logged-in user
  getCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  },

  // Check if user is authenticated
  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },

  // Check if user has specific role
  hasRole(role) {
    const user = this.getCurrentUser();
    return user && user.role === role;
  },

  // Redirect to appropriate dashboard
  redirectToDashboard(role) {
    if (role === 'teacher') {
      window.location.href = 'teacher-dashboard.html';
    } else if (role === 'student') {
      window.location.href = 'student-dashboard.html';
    }
  },

  // Protect page (redirect if not authenticated)
  protectPage(requiredRole = null) {
    const user = this.getCurrentUser();

    if (!user) {
      window.location.href = 'index.html';
      return false;
    }

    if (requiredRole && user.role !== requiredRole) {
      window.location.href = 'index.html';
      return false;
    }

    return true;
  },

  // Get user display name
  getUserDisplayName() {
    const user = this.getCurrentUser();
    return user ? user.name : 'Guest';
  }
};

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AUTH.init());
} else {
  AUTH.init();
}
