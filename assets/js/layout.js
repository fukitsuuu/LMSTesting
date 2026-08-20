/* Shared shell: sidebar, top bar, page header, permission guard, and small UI helpers.
   Every page under /pages calls LMS.initPage(...) once at the bottom of the file. */
window.LMS = (function () {
  const NAV = [
    {
      section: 'Overview',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: 'bi-speedometer2', href: 'dashboard.html', anyOf: ['users.view', 'courses.view', 'grade', 'attendance.view', 'progress.view'] }
      ]
    },
    {
      section: 'Administration',
      items: [
        { id: 'users', label: 'User Management', icon: 'bi-people', href: 'users.html', perm: 'users.view' },
        { id: 'enrollment', label: 'Enrollment', icon: 'bi-person-plus', href: 'enrollment.html', perm: 'enroll.manage' }
      ]
    },
    {
      section: 'Learning',
      items: [
        { id: 'courses', label: 'Courses', icon: 'bi-journal-bookmark', href: 'courses.html', perm: 'courses.view' },
        { id: 'scorm', label: 'SCORM Packages', icon: 'bi-box-seam', href: 'scorm.html', perm: 'scorm.manage' },
        { id: 'schedule', label: 'Schedule & Timetable', icon: 'bi-calendar-week', href: 'schedule.html', perm: 'schedule.view' },
        { id: 'quizzes', label: 'Quizzes & Exams', icon: 'bi-patch-question', href: 'quizzes.html', perm: 'quiz.manage' },
        { id: 'assignments', label: 'Assignments', icon: 'bi-file-earmark-text', href: 'assignments.html', anyOf: ['assignment.manage', 'grade'] },
        { id: 'gradebook', label: 'Gradebook', icon: 'bi-clipboard-check', href: 'gradebook.html', perm: 'grade' }
      ]
    },
    {
      section: 'Monitoring',
      items: [
        { id: 'attendance', label: 'Attendance', icon: 'bi-calendar-check', href: 'attendance.html', perm: 'attendance.view' },
        { id: 'progress', label: 'Student Progress', icon: 'bi-graph-up-arrow', href: 'progress.html', perm: 'progress.view' },
        { id: 'certificates', label: 'Certificates', icon: 'bi-award', href: 'certificates.html', perm: 'certificates.view' },
        { id: 'reports', label: 'Reports & Analytics', icon: 'bi-bar-chart', href: 'reports.html', perm: 'reports.view' }
      ]
    },
    {
      section: 'My Learning',
      items: [
        { id: 'student-courses', label: 'My Courses', icon: 'bi-journal-bookmark', href: 'student-courses.html', perm: 'student.courses' },
        { id: 'student-timetable', label: 'My Timetable', icon: 'bi-calendar-week', href: 'student-timetable.html', perm: 'student.timetable' },
        { id: 'student-progress', label: 'My Progress', icon: 'bi-graph-up-arrow', href: 'student-progress.html', perm: 'student.progress' },
        { id: 'student-attendance', label: 'My Attendance', icon: 'bi-calendar-check', href: 'student-attendance.html', perm: 'student.attendance' },
        { id: 'student-assignments', label: 'My Assignments', icon: 'bi-file-earmark-text', href: 'student-assignments.html', perm: 'student.assignments' },
        { id: 'student-certificates', label: 'My Certificates', icon: 'bi-award', href: 'student-certificates.html', perm: 'student.certificates' }
      ]
    },
    {
      section: 'System',
      items: [
        { id: 'notifications', label: 'Notifications', icon: 'bi-bell', href: 'notifications.html', perm: 'notifications.view' },
        { id: 'settings', label: 'System Administration', icon: 'bi-gear', href: 'settings.html', perm: 'system.admin' }
      ]
    }
  ];

  function allowed(item) {
    if (item.perm) return LMSAuth.can(item.perm);
    if (item.anyOf) return LMSAuth.canAny(item.anyOf);
    return true;
  }

  function buildSidebar(activeId) {
    let html = '<div class="brand">' +
      '<div class="brand-mark">FE</div>' +
      '<div class="brand-text">Learning Management<small>fareastelearning.ph</small></div>' +
      '</div><ul class="nav flex-column pb-4">';

    NAV.forEach(group => {
      const items = group.items.filter(allowed);
      if (!items.length) return;
      html += '<li class="nav-section">' + group.section + '</li>';
      items.forEach(item => {
        const active = item.id === activeId ? ' active' : '';
        html += '<li class="nav-item"><a class="nav-link' + active + '" href="' + item.href + '">' +
          '<i class="bi ' + item.icon + '"></i><span>' + item.label + '</span></a></li>';
      });
    });
    return html + '</ul>';
  }

  function buildTopbar(user) {
    const roleOptions = Object.keys(LMSAuth.roles).map(key =>
      '<li><a class="dropdown-item small" href="#" data-switch-role="' + key + '">' +
      LMSAuth.roles[key].label + (key === user.role ? ' <i class="bi bi-check2 text-primary"></i>' : '') +
      '</a></li>').join('');

    return '' +
      '<div class="d-flex align-items-center gap-3">' +
        '<button class="btn btn-sm btn-light d-lg-none" id="sidebarToggle"><i class="bi bi-list"></i></button>' +
        '<span class="badge-soft badge-blue"><i class="bi bi-shield-lock me-1"></i>' + LMSAuth.roleLabel(user.role) + '</span>' +
      '</div>' +
      '<div class="d-flex align-items-center gap-3">' +
        '<a href="notifications.html" class="text-decoration-none position-relative" title="Notifications">' +
          '<i class="bi bi-bell fs-5 text-secondary"></i>' +
          '<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size:.6rem">3</span>' +
        '</a>' +
        '<div class="dropdown">' +
          '<button class="btn btn-link text-decoration-none p-0 d-flex align-items-center gap-2 dropdown-toggle" data-bs-toggle="dropdown">' +
            '<span class="avatar-circle">' + LMSAuth.initials(user.name) + '</span>' +
            '<span class="text-start d-none d-sm-block">' +
              '<span class="d-block fw-semibold" style="font-size:.82rem;color:var(--lms-navy)">' + user.name + '</span>' +
              '<span class="d-block text-muted" style="font-size:.72rem">' + user.dept + '</span>' +
            '</span>' +
          '</button>' +
          '<ul class="dropdown-menu dropdown-menu-end shadow-sm">' +
            '<li><h6 class="dropdown-header">Signed in as ' + user.email + '</h6></li>' +
            '<li><a class="dropdown-item small" href="#" data-demo-action="Profile settings are display-only in this UI demo.">My Profile</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><h6 class="dropdown-header">Switch demo role</h6></li>' + roleOptions +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item small text-danger" href="#" id="signOutLink"><i class="bi bi-box-arrow-right me-1"></i>Sign out</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>';
  }

  function toast(message, variant) {
    let holder = document.querySelector('.toast-container');
    if (!holder) {
      holder = document.createElement('div');
      holder.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(holder);
    }
    const tone = variant === 'warning' ? 'text-bg-warning' : (variant === 'danger' ? 'text-bg-danger' : 'text-bg-primary');
    const el = document.createElement('div');
    el.className = 'toast align-items-center border-0 ' + tone;
    el.setAttribute('role', 'alert');
    el.innerHTML = '<div class="d-flex"><div class="toast-body">' + message +
      '</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>';
    holder.appendChild(el);
    const t = new bootstrap.Toast(el, { delay: 3200 });
    t.show();
    el.addEventListener('hidden.bs.toast', () => el.remove());
  }

  /* Any form marked data-demo-form shows a success message instead of posting. */
  function wireDemoForms() {
    document.querySelectorAll('form[data-demo-form]').forEach(form => {
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }
        toast(form.getAttribute('data-demo-form') || 'Saved. This UI demo does not store data.');
        form.classList.remove('was-validated');
        const back = form.getAttribute('data-demo-return');
        if (back) setTimeout(() => { window.location.href = back; }, 900);
      });
    });

    document.body.addEventListener('click', function (ev) {
      const trigger = ev.target.closest('[data-demo-action]');
      if (trigger) {
        ev.preventDefault();
        toast(trigger.getAttribute('data-demo-action'));
      }
    });
  }

  function wireRoleSwitch() {
    document.body.addEventListener('click', function (ev) {
      const link = ev.target.closest('[data-switch-role]');
      if (!link) return;
      ev.preventDefault();
      const key = link.getAttribute('data-switch-role');
      const account = LMSAuth.demoAccounts.find(a => a.role === key);
      if (!account) return;
      sessionStorage.setItem('lms.demo.session', JSON.stringify(account));
      window.location.href = key === 'student' ? 'student-courses.html' : 'dashboard.html';
    });

    const signOut = document.getElementById('signOutLink');
    if (signOut) {
      signOut.addEventListener('click', function (ev) {
        ev.preventDefault();
        LMSAuth.signOut('../');
      });
    }
  }

  function wireSidebarToggle() {
    const toggle = document.getElementById('sidebarToggle');
    if (toggle) toggle.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (backdrop) backdrop.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
  }

  function buildHeader(config, user) {
    const crumbs = (config.breadcrumb || []).map((c, i, arr) =>
      i === arr.length - 1
        ? '<li class="breadcrumb-item active">' + c.label + '</li>'
        : '<li class="breadcrumb-item"><a href="' + c.href + '">' + c.label + '</a></li>'
    ).join('');

    return '' +
      (crumbs ? '<nav><ol class="breadcrumb">' + crumbs + '</ol></nav>' : '') +
      '<div class="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">' +
        '<div>' +
          '<h1 class="page-title">' + config.title + '</h1>' +
          (config.sub ? '<p class="page-sub">' + config.sub + '</p>' : '') +
        '</div>' +
        '<div id="pageActions" class="d-flex flex-wrap gap-2"></div>' +
      '</div>';
  }

  /* Guard the page, then render the shell around the existing markup. */
  function initPage(config) {
    const user = LMSAuth.current();
    if (!user) {
      window.location.href = '../index.html';
      return;
    }

    const permitted = config.perm ? LMSAuth.can(config.perm)
      : (config.anyOf ? LMSAuth.canAny(config.anyOf) : true);
    if (!permitted) {
      const home = user.role === 'student' ? 'student-courses.html' : 'dashboard.html';
      sessionStorage.setItem('lms.demo.denied', config.title || 'that page');
      window.location.href = home;
      return;
    }

    document.body.insertAdjacentHTML('afterbegin',
      '<aside class="app-sidebar">' + buildSidebar(config.id) + '</aside>' +
      '<div class="sidebar-backdrop"></div>' +
      '<header class="app-topbar">' + buildTopbar(user) + '</header>');

    const main = document.querySelector('.app-main');
    if (main) main.insertAdjacentHTML('afterbegin', buildHeader(config, user));

    /* Move page-declared action buttons into the header row. */
    const declared = document.getElementById('pageActionSource');
    const target = document.getElementById('pageActions');
    if (declared && target) {
      target.innerHTML = declared.innerHTML;
      declared.remove();
    }

    /* Hide any element whose permission the current role does not hold. */
    document.querySelectorAll('[data-perm]').forEach(el => {
      const needed = el.getAttribute('data-perm').split('|').map(s => s.trim());
      if (!needed.some(p => LMSAuth.can(p))) el.remove();
    });
    document.querySelectorAll('[data-role-only]').forEach(el => {
      const allowedRoles = el.getAttribute('data-role-only').split('|').map(s => s.trim());
      if (allowedRoles.indexOf(user.role) === -1) el.remove();
    });

    wireSidebarToggle();
    wireRoleSwitch();
    wireDemoForms();

    const denied = sessionStorage.getItem('lms.demo.denied');
    if (denied) {
      sessionStorage.removeItem('lms.demo.denied');
      toast('Your role does not have access to ' + denied + '.', 'warning');
    }

    document.title = config.title + ' | Far East e-Learning LMS';
  }

  /* Small render helpers used across the module pages. */
  function badge(text, tone) {
    return '<span class="badge-soft badge-' + tone + '">' + text + '</span>';
  }
  function statusBadge(status) {
    const map = {
      'Active': 'green', 'Completed': 'green', 'Published': 'green', 'Issued': 'green', 'Passed': 'green',
      'Success': 'green', 'Validated': 'green', 'Delivered': 'green', 'Open': 'green', 'Complete': 'green',
      'On Track': 'blue', 'In Progress': 'blue', 'Scheduled': 'blue', 'Submitted': 'blue', 'Graded': 'blue',
      'Processing': 'amber', 'Pending': 'amber', 'Draft': 'amber', 'Queued': 'amber', 'Late': 'amber',
      'At Risk': 'amber', 'Incomplete': 'amber',
      'Inactive': 'grey', 'Closed': 'grey', 'Locked': 'grey', 'Archived': 'grey',
      'Suspended': 'red', 'Failed': 'red'
    };
    return badge(status, map[status] || 'grey');
  }
  function progressBar(percent) {
    return '<div class="d-flex align-items-center gap-2">' +
      '<div class="progress flex-grow-1" style="height:6px;min-width:70px"><div class="progress-bar" style="width:' + percent + '%"></div></div>' +
      '<span class="text-muted-sm">' + percent + '%</span></div>';
  }
  function render(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }

  return { initPage, toast, badge, statusBadge, progressBar, render, NAV };
})();
