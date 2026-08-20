/* Demo authentication and role-based access control (UI only).
   The signed-in role is kept in sessionStorage so menus and actions can change.
   No user or course record is ever saved. */
window.LMSAuth = (function () {
  const SESSION_KEY = 'lms.demo.session';
  const PENDING_KEY = 'lms.demo.pending';

  /* Permission matrix agreed with the client, layered on the proposal's role list. */
  const roles = {
    sysadmin: {
      label: 'System Administration',
      short: 'System Admin',
      summary: 'Full access to every module, including system administration.',
      creatable: ['sysadmin', 'manager', 'administrator', 'editing_teacher', 'non_editing_teacher', 'student'],
      permissions: [
        'users.view', 'users.create', 'courses.view', 'courses.manage', 'scorm.manage',
        'schedule.view', 'schedule.manage', 'enroll.manage', 'quiz.manage', 'assignment.manage',
        'grade', 'attendance.view', 'attendance.manage', 'progress.view',
        'certificates.view', 'certificates.manage', 'reports.view', 'reports.export',
        'notifications.view', 'system.admin'
      ]
    },
    manager: {
      label: 'Manager',
      short: 'Manager',
      summary: 'Creates administrators, teachers, and students; manages courses, grading, certificates, and reports.',
      creatable: ['administrator', 'editing_teacher', 'non_editing_teacher', 'student'],
      permissions: [
        'users.view', 'users.create', 'courses.view', 'courses.manage', 'scorm.manage',
        'schedule.view', 'schedule.manage', 'enroll.manage', 'quiz.manage', 'assignment.manage',
        'grade', 'attendance.view', 'attendance.manage', 'progress.view',
        'certificates.view', 'certificates.manage', 'reports.view', 'reports.export',
        'notifications.view'
      ]
    },
    administrator: {
      label: 'Administrator',
      short: 'Administrator',
      summary: 'Creates teachers and students; manages courses, grading, certificates, and reports.',
      creatable: ['editing_teacher', 'non_editing_teacher', 'student'],
      permissions: [
        'users.view', 'users.create', 'courses.view', 'courses.manage', 'scorm.manage',
        'schedule.view', 'schedule.manage', 'enroll.manage', 'quiz.manage', 'assignment.manage',
        'grade', 'attendance.view', 'attendance.manage', 'progress.view',
        'certificates.view', 'certificates.manage', 'reports.view', 'reports.export',
        'notifications.view'
      ]
    },
    editing_teacher: {
      label: 'Editing Teacher',
      short: 'Editing Teacher',
      summary: 'Grades students on assigned courses. No user, course, schedule, certificate, or export actions.',
      creatable: [],
      permissions: ['grade', 'courses.view', 'progress.view', 'notifications.view']
    },
    non_editing_teacher: {
      label: 'Non-editing Teacher',
      short: 'Non-editing Teacher',
      summary: 'Monitoring only. Reads progress, attendance, and reports with no action buttons and no exports.',
      creatable: [],
      permissions: [
        'courses.view', 'attendance.view', 'progress.view',
        'certificates.view', 'reports.view', 'notifications.view'
      ]
    },
    student: {
      label: 'Student',
      short: 'Student',
      summary: 'Follows the sequential learning path, takes assessments, and receives the Certificate of Attendance.',
      creatable: [],
      permissions: [
        'student.courses', 'student.timetable', 'student.attendance', 'student.progress',
        'student.assignments', 'student.certificates', 'notifications.view'
      ]
    }
  };

  const demoAccounts = [
    { email: 'k.slow@fareastelearning.ph', name: 'Kols Slow', role: 'sysadmin', dept: 'Digital Operations' },
    { email: 'e.villamor@fareastelearning.ph', name: 'Elena Villamor', role: 'manager', dept: 'Training Management' },
    { email: 'g.bautista@fareastelearning.ph', name: 'Grace Bautista', role: 'administrator', dept: 'Registrar' },
    { email: 'l.manalo@fareastelearning.ph', name: 'Dr. Liza Manalo', role: 'editing_teacher', dept: 'Safety & Compliance' },
    { email: 'c.aquino@fareastelearning.ph', name: 'Cristina Aquino', role: 'non_editing_teacher', dept: 'Quality Assurance' },
    { email: 'j.torres@fareastelearning.ph', name: 'Jasmine Torres', role: 'student', dept: 'Operations' }
  ];

  function findAccount(email) {
    const key = String(email || '').trim().toLowerCase();
    return demoAccounts.find(a => a.email === key) || null;
  }

  function setPending(account) {
    sessionStorage.setItem(PENDING_KEY, JSON.stringify(account));
  }
  function getPending() {
    try { return JSON.parse(sessionStorage.getItem(PENDING_KEY)); } catch (e) { return null; }
  }
  function confirmPending() {
    const pending = getPending();
    if (!pending) return null;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(pending));
    sessionStorage.removeItem(PENDING_KEY);
    return pending;
  }
  function current() {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch (e) { return null; }
  }
  function signOut(prefix) {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(PENDING_KEY);
    window.location.href = (prefix || '') + 'index.html';
  }
  function can(permission) {
    const user = current();
    if (!user) return false;
    const role = roles[user.role];
    return !!role && role.permissions.indexOf(permission) !== -1;
  }
  function canAny(list) {
    return (list || []).some(can);
  }
  function creatableRoles() {
    const user = current();
    if (!user) return [];
    return (roles[user.role] || {}).creatable || [];
  }
  function roleLabel(key) {
    return (roles[key] || {}).label || key;
  }
  function initials(name) {
    return String(name || '?').split(' ').filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('');
  }
  /* Landing page for each role, used after sign-in and when a page is not permitted. */
  function homePage(roleKey) {
    return roleKey === 'student' ? 'pages/student-courses.html' : 'pages/dashboard.html';
  }

  return {
    roles, demoAccounts, findAccount, setPending, getPending, confirmPending,
    current, signOut, can, canAny, creatableRoles, roleLabel, initials, homePage
  };
})();
