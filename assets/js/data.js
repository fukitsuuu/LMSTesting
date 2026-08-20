/* Sample data for the UI-only LMS demo. Nothing here is persisted. */
window.LMSData = (function () {
  const users = [
    { id: 'U-1001', name: 'Kols Slow', email: 'k.slow@fareastelearning.ph', role: 'sysadmin', dept: 'Digital Operations', status: 'Active', last: '2026-08-20 08:12' },
    { id: 'U-1002', name: 'Marvin Quiriado', email: 'm.quiriado@fareastelearning.ph', role: 'sysadmin', dept: 'Digital Operations', status: 'Active', last: '2026-08-20 07:55' },
    { id: 'U-1010', name: 'Elena Villamor', email: 'e.villamor@fareastelearning.ph', role: 'manager', dept: 'Training Management', status: 'Active', last: '2026-08-19 16:40' },
    { id: 'U-1011', name: 'Ramon Dizon', email: 'r.dizon@fareastelearning.ph', role: 'manager', dept: 'Training Management', status: 'Active', last: '2026-08-18 09:05' },
    { id: 'U-1020', name: 'Grace Bautista', email: 'g.bautista@fareastelearning.ph', role: 'administrator', dept: 'Registrar', status: 'Active', last: '2026-08-20 08:31' },
    { id: 'U-1021', name: 'Alvin Castro', email: 'a.castro@fareastelearning.ph', role: 'administrator', dept: 'Registrar', status: 'Inactive', last: '2026-07-30 13:20' },
    { id: 'U-1030', name: 'Dr. Liza Manalo', email: 'l.manalo@fareastelearning.ph', role: 'editing_teacher', dept: 'Safety & Compliance', status: 'Active', last: '2026-08-20 09:14' },
    { id: 'U-1031', name: 'Engr. Paolo Reyes', email: 'p.reyes@fareastelearning.ph', role: 'editing_teacher', dept: 'Technical Training', status: 'Active', last: '2026-08-19 15:02' },
    { id: 'U-1040', name: 'Cristina Aquino', email: 'c.aquino@fareastelearning.ph', role: 'non_editing_teacher', dept: 'Quality Assurance', status: 'Active', last: '2026-08-20 08:47' },
    { id: 'U-1041', name: 'Noel Fajardo', email: 'n.fajardo@fareastelearning.ph', role: 'non_editing_teacher', dept: 'Quality Assurance', status: 'Active', last: '2026-08-17 11:23' },
    { id: 'S-2001', name: 'Jasmine Torres', email: 'j.torres@fareastelearning.ph', role: 'student', dept: 'Operations', status: 'Active', last: '2026-08-20 09:40' },
    { id: 'S-2002', name: 'Mark Delos Santos', email: 'm.delossantos@fareastelearning.ph', role: 'student', dept: 'Operations', status: 'Active', last: '2026-08-20 09:12' },
    { id: 'S-2003', name: 'Angel Ramos', email: 'a.ramos@fareastelearning.ph', role: 'student', dept: 'Logistics', status: 'Active', last: '2026-08-19 17:38' },
    { id: 'S-2004', name: 'Ferdinand Lim', email: 'f.lim@fareastelearning.ph', role: 'student', dept: 'Logistics', status: 'Active', last: '2026-08-19 14:05' },
    { id: 'S-2005', name: 'Bea Soriano', email: 'b.soriano@fareastelearning.ph', role: 'student', dept: 'Administration', status: 'Suspended', last: '2026-08-11 10:30' }
  ];

  const courses = [
    {
      id: 'C-101', code: 'WST-2026', title: 'Workplace Safety Training',
      instructor: 'Dr. Liza Manalo', category: 'Safety & Compliance', status: 'Published',
      enrolled: 48, syncHours: 4, asyncHours: 1.6, minTotal: 5.6, materials: 3, quizzes: 1, assignments: 1,
      start: '2026-08-03', end: '2026-09-04',
      description: 'Mandatory occupational health and safety orientation covering hazard identification, emergency response, and incident reporting.'
    },
    {
      id: 'C-102', code: 'DPA-2026', title: 'Data Privacy Act Awareness',
      instructor: 'Engr. Paolo Reyes', category: 'Governance', status: 'Published',
      enrolled: 62, syncHours: 3, asyncHours: 2, minTotal: 5, materials: 4, quizzes: 2, assignments: 1,
      start: '2026-08-10', end: '2026-09-11',
      description: 'RA 10173 fundamentals for staff handling personal and sensitive personal information.'
    },
    {
      id: 'C-103', code: 'FSE-2026', title: 'Fire Safety and Evacuation Drill',
      instructor: 'Dr. Liza Manalo', category: 'Safety & Compliance', status: 'Published',
      enrolled: 35, syncHours: 2, asyncHours: 1, minTotal: 3, materials: 2, quizzes: 1, assignments: 0,
      start: '2026-07-06', end: '2026-08-07',
      description: 'Evacuation procedures, fire extinguisher operation, and assembly point protocols.'
    },
    {
      id: 'C-104', code: 'CSE-2026', title: 'Customer Service Excellence',
      instructor: 'Engr. Paolo Reyes', category: 'Professional Skills', status: 'Draft',
      enrolled: 0, syncHours: 3, asyncHours: 2.5, minTotal: 5.5, materials: 3, quizzes: 1, assignments: 2,
      start: '2026-09-07', end: '2026-10-09',
      description: 'Service standards, complaint handling, and communication techniques for frontline staff.'
    },
    {
      id: 'C-105', code: 'ITS-2026', title: 'IT Security Essentials',
      instructor: 'Engr. Paolo Reyes', category: 'Technical Training', status: 'Scheduled',
      enrolled: 12, syncHours: 4, asyncHours: 3, minTotal: 7, materials: 5, quizzes: 2, assignments: 1,
      start: '2026-09-14', end: '2026-10-16',
      description: 'Phishing awareness, password hygiene, device security, and incident escalation.'
    }
  ];

  /* Learning materials for C-101, exactly as described in the proposal (pages 8-9). */
  const materials = [
    {
      seq: 1, id: 'M-1', title: 'Learning Material 1 - Workplace Hazard Identification',
      type: 'SCORM Package', typeIcon: 'bi-box-seam', requiredMinutes: 30,
      conditions: [
        { key: 'scroll_end', label: 'Scroll to the last page', met: true },
        { key: 'min_time', label: 'Stay for at least 30 minutes', met: true },
        { key: 'confirm_question', label: 'Answer confirmation question', met: true },
        { key: 'mark_complete', label: 'Mark as Completed', met: true }
      ],
      restrictions: [],
      status: 'completed', timeSpent: 32, page: 'student-scorm.html'
    },
    {
      seq: 2, id: 'M-2', title: 'Learning Material 2 - Emergency Response Procedures',
      type: 'Training Video', typeIcon: 'bi-camera-video', requiredMinutes: 45,
      conditions: [
        { key: 'watch_full', label: 'Watch 100% of the video', met: false },
        { key: 'min_time', label: 'Stay for at least 45 minutes', met: false }
      ],
      restrictions: ['Cannot Forward Video', 'Cannot Seek Video', 'Cannot Download Video', 'Cannot Copy Video URL'],
      status: 'in_progress', timeSpent: 18, page: 'student-video.html'
    },
    {
      seq: 3, id: 'M-3', title: 'Learning Material 3 - Incident Reporting Manual',
      type: 'PDF Manual', typeIcon: 'bi-file-earmark-pdf', requiredMinutes: 20,
      conditions: [
        { key: 'scroll_end', label: 'Scroll to the last page', met: false },
        { key: 'min_time', label: 'Stay for at least 20 minutes', met: false },
        { key: 'mark_read', label: 'Mark as Read', met: false }
      ],
      restrictions: ['Cannot Download PDF', 'Cannot Print PDF'],
      status: 'locked', timeSpent: 0, page: 'student-pdf.html'
    },
    {
      seq: 4, id: 'M-4', title: 'Final Assessment - Workplace Safety Quiz',
      type: 'Quiz', typeIcon: 'bi-patch-question', requiredMinutes: 30,
      conditions: [
        { key: 'pass_quiz', label: 'Score at least 75% to pass', met: false }
      ],
      restrictions: ['Unlocked only after all learning materials are completed'],
      status: 'locked', timeSpent: 0, page: 'quiz-take.html'
    }
  ];

  const scormPackages = [
    { id: 'SC-01', name: 'workplace-hazard-id.zip', title: 'Workplace Hazard Identification', version: 'SCORM 1.2', size: '18.4 MB', course: 'Workplace Safety Training', uploaded: '2026-08-01', status: 'Validated' },
    { id: 'SC-02', name: 'data-privacy-basics.zip', title: 'Data Privacy Act Basics', version: 'SCORM 2004 4th Ed.', size: '24.1 MB', course: 'Data Privacy Act Awareness', uploaded: '2026-08-08', status: 'Validated' },
    { id: 'SC-03', name: 'fire-safety-module.zip', title: 'Fire Safety Fundamentals', version: 'SCORM 1.2', size: '12.7 MB', course: 'Fire Safety and Evacuation Drill', uploaded: '2026-07-04', status: 'Validated' },
    { id: 'SC-04', name: 'it-sec-phishing.zip', title: 'Phishing Awareness', version: 'SCORM 2004 3rd Ed.', size: '31.9 MB', course: 'IT Security Essentials', uploaded: '2026-08-15', status: 'Processing' }
  ];

  const schedule = [
    { id: 'SCH-01', course: 'Workplace Safety Training', code: 'WST-2026', day: 'Monday', time: '09:00 - 11:00', mode: 'Synchronous (Google Meet)', room: 'meet.google.com/wst-2026', instructor: 'Dr. Liza Manalo', window: 'Open', date: '2026-08-24' },
    { id: 'SCH-02', course: 'Workplace Safety Training', code: 'WST-2026', day: 'Wednesday', time: '09:00 - 11:00', mode: 'Asynchronous (LMS)', room: 'LMS Self-paced', instructor: 'Dr. Liza Manalo', window: 'Open', date: '2026-08-26' },
    { id: 'SCH-03', course: 'Data Privacy Act Awareness', code: 'DPA-2026', day: 'Tuesday', time: '13:00 - 15:00', mode: 'Synchronous (Google Meet)', room: 'meet.google.com/dpa-2026', instructor: 'Engr. Paolo Reyes', window: 'Open', date: '2026-08-25' },
    { id: 'SCH-04', course: 'Data Privacy Act Awareness', code: 'DPA-2026', day: 'Thursday', time: '13:00 - 15:00', mode: 'Asynchronous (LMS)', room: 'LMS Self-paced', instructor: 'Engr. Paolo Reyes', window: 'Open', date: '2026-08-27' },
    { id: 'SCH-05', course: 'Fire Safety and Evacuation Drill', code: 'FSE-2026', day: 'Friday', time: '08:00 - 10:00', mode: 'Synchronous (On-site)', room: 'Training Hall A', instructor: 'Dr. Liza Manalo', window: 'Closed', date: '2026-08-07' },
    { id: 'SCH-06', course: 'IT Security Essentials', code: 'ITS-2026', day: 'Monday', time: '14:00 - 16:00', mode: 'Synchronous (Google Meet)', room: 'meet.google.com/its-2026', instructor: 'Engr. Paolo Reyes', window: 'Locked until 2026-09-14', date: '2026-09-14' }
  ];

  const enrollments = [
    { id: 'E-5001', student: 'Jasmine Torres', studentId: 'S-2001', course: 'Workplace Safety Training', enrolled: '2026-08-03', progress: 62, status: 'In Progress' },
    { id: 'E-5002', student: 'Mark Delos Santos', studentId: 'S-2002', course: 'Workplace Safety Training', enrolled: '2026-08-03', progress: 100, status: 'Completed' },
    { id: 'E-5003', student: 'Angel Ramos', studentId: 'S-2003', course: 'Workplace Safety Training', enrolled: '2026-08-04', progress: 45, status: 'In Progress' },
    { id: 'E-5004', student: 'Ferdinand Lim', studentId: 'S-2004', course: 'Data Privacy Act Awareness', enrolled: '2026-08-10', progress: 78, status: 'In Progress' },
    { id: 'E-5005', student: 'Bea Soriano', studentId: 'S-2005', course: 'Data Privacy Act Awareness', enrolled: '2026-08-10', progress: 12, status: 'At Risk' },
    { id: 'E-5006', student: 'Jasmine Torres', studentId: 'S-2001', course: 'Fire Safety and Evacuation Drill', enrolled: '2026-07-06', progress: 100, status: 'Completed' },
    { id: 'E-5007', student: 'Mark Delos Santos', studentId: 'S-2002', course: 'Fire Safety and Evacuation Drill', enrolled: '2026-07-06', progress: 100, status: 'Completed' }
  ];

  const quizzes = [
    { id: 'Q-01', title: 'Workplace Safety Final Assessment', course: 'Workplace Safety Training', items: 20, points: 100, passing: 75, attempts: 2, duration: 30, grading: 'Automated', status: 'Published', submissions: 31 },
    { id: 'Q-02', title: 'Data Privacy Knowledge Check', course: 'Data Privacy Act Awareness', items: 15, points: 75, passing: 70, attempts: 3, duration: 25, grading: 'Automated', status: 'Published', submissions: 48 },
    { id: 'Q-03', title: 'Data Privacy Case Analysis', course: 'Data Privacy Act Awareness', items: 5, points: 50, passing: 60, attempts: 1, duration: 45, grading: 'Manual (essay)', status: 'Published', submissions: 44 },
    { id: 'Q-04', title: 'Fire Safety Post-Test', course: 'Fire Safety and Evacuation Drill', items: 10, points: 50, passing: 75, attempts: 2, duration: 20, grading: 'Automated', status: 'Closed', submissions: 35 }
  ];

  const quizQuestions = [
    {
      no: 1, type: 'Multiple Choice', points: 5,
      text: 'Which of the following is the FIRST step when you identify a workplace hazard?',
      options: ['Continue working and report at end of shift', 'Report it immediately to your supervisor or safety officer', 'Attempt to repair the hazard yourself', 'Take a photo and post it on the group chat']
    },
    {
      no: 2, type: 'True or False', points: 5,
      text: 'Personal Protective Equipment (PPE) may be removed inside designated hazard zones if the task takes less than five minutes.',
      options: ['True', 'False']
    },
    {
      no: 3, type: 'Multiple Choice', points: 5,
      text: 'During an evacuation, employees should proceed to the:',
      options: ['Nearest exit and then to the designated assembly point', 'Parking area to secure personal vehicles', 'Workstation to shut down equipment first', 'Elevator for faster descent']
    },
    {
      no: 4, type: 'Short Answer', points: 10,
      text: 'In your own words, state the purpose of an incident report and when it must be submitted.',
      options: []
    }
  ];

  const assignments = [
    { id: 'A-01', title: 'Workplace Hazard Observation Report', course: 'Workplace Safety Training', due: '2026-08-28', points: 50, submitted: 29, graded: 21, status: 'Open' },
    { id: 'A-02', title: 'Data Privacy Gap Assessment', course: 'Data Privacy Act Awareness', due: '2026-09-02', points: 50, submitted: 40, graded: 12, status: 'Open' },
    { id: 'A-03', title: 'Department Privacy Notice Draft', course: 'Data Privacy Act Awareness', due: '2026-09-08', points: 40, submitted: 8, graded: 0, status: 'Open' },
    { id: 'A-04', title: 'Evacuation Route Sketch', course: 'Fire Safety and Evacuation Drill', due: '2026-08-01', points: 30, submitted: 35, graded: 35, status: 'Closed' }
  ];

  const submissions = [
    { student: 'Jasmine Torres', studentId: 'S-2001', assignment: 'Workplace Hazard Observation Report', file: 'hazard-report-torres.pdf', size: '1.2 MB', submitted: '2026-08-19 21:04', status: 'Submitted', score: null },
    { student: 'Mark Delos Santos', studentId: 'S-2002', assignment: 'Workplace Hazard Observation Report', file: 'hazard-report-delossantos.docx', size: '840 KB', submitted: '2026-08-18 16:22', status: 'Graded', score: 46 },
    { student: 'Angel Ramos', studentId: 'S-2003', assignment: 'Workplace Hazard Observation Report', file: 'hazard-report-ramos.pdf', size: '2.1 MB', submitted: '2026-08-20 08:10', status: 'Submitted', score: null },
    { student: 'Ferdinand Lim', studentId: 'S-2004', assignment: 'Data Privacy Gap Assessment', file: 'privacy-gap-lim.pdf', size: '1.7 MB', submitted: '2026-08-17 10:45', status: 'Graded', score: 44 },
    { student: 'Bea Soriano', studentId: 'S-2005', assignment: 'Data Privacy Gap Assessment', file: 'privacy-gap-soriano.pdf', size: '990 KB', submitted: '2026-08-20 07:33', status: 'Late', score: null }
  ];

  const gradebook = [
    { student: 'Jasmine Torres', studentId: 'S-2001', course: 'Workplace Safety Training', quiz: 88, assignment: null, final: null, remark: 'Pending assignment grade' },
    { student: 'Mark Delos Santos', studentId: 'S-2002', course: 'Workplace Safety Training', quiz: 92, assignment: 46, final: 90, remark: 'Passed' },
    { student: 'Angel Ramos', studentId: 'S-2003', course: 'Workplace Safety Training', quiz: 71, assignment: null, final: null, remark: 'Below passing - retake available' },
    { student: 'Ferdinand Lim', studentId: 'S-2004', course: 'Data Privacy Act Awareness', quiz: 84, assignment: 44, final: 86, remark: 'Passed' },
    { student: 'Bea Soriano', studentId: 'S-2005', course: 'Data Privacy Act Awareness', quiz: 58, assignment: null, final: null, remark: 'Below passing - retake available' }
  ];

  /* Attendance blends synchronous (Google Meet) and asynchronous (LMS) hours per the COA rules. */
  const attendance = [
    { student: 'Jasmine Torres', studentId: 'S-2001', course: 'Workplace Safety Training', syncReq: 4, syncDone: 4, asyncReq: 1.6, asyncDone: 0.9, sessions: '4 of 4', status: 'On Track' },
    { student: 'Mark Delos Santos', studentId: 'S-2002', course: 'Workplace Safety Training', syncReq: 4, syncDone: 4, asyncReq: 1.6, asyncDone: 1.6, sessions: '4 of 4', status: 'Complete' },
    { student: 'Angel Ramos', studentId: 'S-2003', course: 'Workplace Safety Training', syncReq: 4, syncDone: 2, asyncReq: 1.6, asyncDone: 0.6, sessions: '2 of 4', status: 'Incomplete' },
    { student: 'Ferdinand Lim', studentId: 'S-2004', course: 'Data Privacy Act Awareness', syncReq: 3, syncDone: 3, asyncReq: 2, asyncDone: 1.4, sessions: '3 of 3', status: 'On Track' },
    { student: 'Bea Soriano', studentId: 'S-2005', course: 'Data Privacy Act Awareness', syncReq: 3, syncDone: 1, asyncReq: 2, asyncDone: 0.2, sessions: '1 of 3', status: 'Incomplete' }
  ];

  const progress = [
    { student: 'Jasmine Torres', studentId: 'S-2001', course: 'Workplace Safety Training', m1: 'Completed', m2: 'In Progress', m3: 'Locked', quiz: 'Locked', engagement: '4.9 / 5.6 hrs', percent: 62, coa: 'Not eligible' },
    { student: 'Mark Delos Santos', studentId: 'S-2002', course: 'Workplace Safety Training', m1: 'Completed', m2: 'Completed', m3: 'Completed', quiz: 'Passed (92%)', engagement: '5.6 / 5.6 hrs', percent: 100, coa: 'Eligible' },
    { student: 'Angel Ramos', studentId: 'S-2003', course: 'Workplace Safety Training', m1: 'Completed', m2: 'In Progress', m3: 'Locked', quiz: 'Locked', engagement: '2.6 / 5.6 hrs', percent: 45, coa: 'Not eligible' },
    { student: 'Ferdinand Lim', studentId: 'S-2004', course: 'Data Privacy Act Awareness', m1: 'Completed', m2: 'Completed', m3: 'In Progress', quiz: 'Passed (84%)', engagement: '4.4 / 5.0 hrs', percent: 78, coa: 'Not eligible' },
    { student: 'Bea Soriano', studentId: 'S-2005', course: 'Data Privacy Act Awareness', m1: 'In Progress', m2: 'Locked', m3: 'Locked', quiz: 'Locked', engagement: '1.2 / 5.0 hrs', percent: 12, coa: 'Not eligible' }
  ];

  const certificates = [
    { id: 'COA-2026-0148', student: 'Mark Delos Santos', studentId: 'S-2002', course: 'Workplace Safety Training', issued: '2026-08-19', hours: '5.6 hrs', validated: 'System validated', status: 'Issued' },
    { id: 'COA-2026-0132', student: 'Jasmine Torres', studentId: 'S-2001', course: 'Fire Safety and Evacuation Drill', issued: '2026-08-08', hours: '3.0 hrs', validated: 'System validated', status: 'Issued' },
    { id: 'COA-2026-0133', student: 'Mark Delos Santos', studentId: 'S-2002', course: 'Fire Safety and Evacuation Drill', issued: '2026-08-08', hours: '3.0 hrs', validated: 'System validated', status: 'Issued' },
    { id: 'COA-2026-0151', student: 'Ferdinand Lim', studentId: 'S-2004', course: 'Data Privacy Act Awareness', issued: null, hours: '4.4 / 5.0 hrs', validated: 'Pending - engagement hours short', status: 'Pending' },
    { id: 'COA-2026-0152', student: 'Jasmine Torres', studentId: 'S-2001', course: 'Workplace Safety Training', issued: null, hours: '4.9 / 5.6 hrs', validated: 'Pending - Material 2 and 3 incomplete', status: 'Pending' }
  ];

  /* Certificate of Attendance rules, quoted from the proposal (page 6). */
  const coaRules = [
    { label: 'Student has been successfully enrolled and assigned to the course', met: true },
    { label: 'Completed the required synchronous training hours (Google Meet or approved platform)', met: true },
    { label: 'Completed the required asynchronous learning hours through the LMS', met: false },
    { label: 'Completed all mandatory learning activities required for the course', met: false },
    { label: 'Completed the required quiz or assessment, where applicable', met: false },
    { label: 'Total recorded engagement time meets or exceeds the minimum course duration', met: false },
    { label: 'All course completion requirements validated by the system', met: false }
  ];

  const notifications = [
    { type: 'Enrollment', subject: 'You have been enrolled in Workplace Safety Training', to: 'j.torres@fareastelearning.ph', sent: '2026-08-03 09:02', status: 'Delivered' },
    { type: 'Schedule', subject: 'Reminder: Synchronous session on Monday 09:00', to: 'All WST-2026 participants', sent: '2026-08-19 17:00', status: 'Delivered' },
    { type: 'Grade Posted', subject: 'Your quiz result for Workplace Safety Final Assessment', to: 'm.delossantos@fareastelearning.ph', sent: '2026-08-19 11:24', status: 'Delivered' },
    { type: 'Certificate', subject: 'Your Certificate of Attendance is now available', to: 'm.delossantos@fareastelearning.ph', sent: '2026-08-19 14:10', status: 'Delivered' },
    { type: 'OTP', subject: 'Your one-time password for LMS sign-in', to: 'g.bautista@fareastelearning.ph', sent: '2026-08-20 08:30', status: 'Delivered' },
    { type: 'Assignment', subject: 'New assignment posted: Data Privacy Gap Assessment', to: 'All DPA-2026 participants', sent: '2026-08-16 08:00', status: 'Queued' }
  ];

  const auditLog = [
    { time: '2026-08-20 09:41', user: 'Kols Slow', role: 'System Administration', action: 'Created user account S-2005 (Student)', ip: '192.168.1.24' },
    { time: '2026-08-20 09:12', user: 'Grace Bautista', role: 'Administrator', action: 'Enrolled 12 students into IT Security Essentials', ip: '192.168.1.55' },
    { time: '2026-08-19 16:48', user: 'Elena Villamor', role: 'Manager', action: 'Exported Completion Report (CSV)', ip: '192.168.1.31' },
    { time: '2026-08-19 14:10', user: 'System', role: 'System', action: 'Issued COA-2026-0148 to Mark Delos Santos', ip: 'localhost' },
    { time: '2026-08-19 11:24', user: 'Dr. Liza Manalo', role: 'Editing Teacher', action: 'Posted quiz grade for S-2002', ip: '192.168.1.77' },
    { time: '2026-08-18 08:03', user: 'System', role: 'System', action: 'Nightly database backup completed (412 MB)', ip: 'localhost' },
    { time: '2026-08-17 15:32', user: 'Alvin Castro', role: 'Administrator', action: 'Failed sign-in attempt - invalid OTP', ip: '192.168.1.90' }
  ];

  const backups = [
    { date: '2026-08-20 02:00', type: 'Full database', size: '412 MB', target: 'Web hosting + external drive', status: 'Success' },
    { date: '2026-08-19 02:00', type: 'Full database', size: '408 MB', target: 'Web hosting + external drive', status: 'Success' },
    { date: '2026-08-18 02:00', type: 'Learning content', size: '6.8 GB', target: 'Cloud storage', status: 'Success' },
    { date: '2026-08-17 02:00', type: 'Full database', size: '401 MB', target: 'Web hosting + external drive', status: 'Success' }
  ];

  const archiveQueue = [
    { course: 'Fire Safety and Evacuation Drill', ended: '2026-08-07', archiveOn: '2026-09-06', records: 35, target: 'On-premises physical server', status: 'Scheduled' },
    { course: 'Basic Occupational Safety (Batch 3)', ended: '2026-07-12', archiveOn: '2026-08-11', records: 41, target: 'On-premises physical server', status: 'Archived' },
    { course: 'Records Management Orientation', ended: '2026-06-28', archiveOn: '2026-07-28', records: 27, target: 'On-premises physical server', status: 'Archived' }
  ];

  const reportCatalog = [
    { name: 'Enrollment Report', desc: 'Learners enrolled per course, department, and batch.', records: 157, updated: '2026-08-20 06:00' },
    { name: 'Course Completion Report', desc: 'Completion rate, engagement hours, and pending requirements.', records: 157, updated: '2026-08-20 06:00' },
    { name: 'Grades Report', desc: 'Quiz and assignment scores with pass or fail remarks.', records: 132, updated: '2026-08-20 06:00' },
    { name: 'Attendance Report', desc: 'Synchronous and asynchronous hours recorded per learner.', records: 157, updated: '2026-08-20 06:00' },
    { name: 'Certificate Issuance Report', desc: 'Certificates of Attendance issued, pending, and revoked.', records: 148, updated: '2026-08-20 06:00' },
    { name: 'Audit Trail Report', desc: 'System actions with user, role, timestamp, and IP address.', records: 4210, updated: '2026-08-20 09:41' }
  ];

  const studentCourses = [
    { id: 'C-101', title: 'Workplace Safety Training', code: 'WST-2026', instructor: 'Dr. Liza Manalo', progress: 62, status: 'In Progress', available: true, note: 'Available now - session window is open' },
    { id: 'C-103', title: 'Fire Safety and Evacuation Drill', code: 'FSE-2026', instructor: 'Dr. Liza Manalo', progress: 100, status: 'Completed', available: true, note: 'Completed - Certificate of Attendance issued' },
    { id: 'C-105', title: 'IT Security Essentials', code: 'ITS-2026', instructor: 'Engr. Paolo Reyes', progress: 0, status: 'Locked', available: false, note: 'Locked until 14 September 2026, 14:00 (timetable-based access)' }
  ];

  const roleLabels = {
    sysadmin: 'System Administration',
    manager: 'Manager',
    administrator: 'Administrator',
    editing_teacher: 'Editing Teacher',
    non_editing_teacher: 'Non-editing Teacher',
    student: 'Student'
  };

  return {
    users, courses, materials, scormPackages, schedule, enrollments, quizzes, quizQuestions,
    assignments, submissions, gradebook, attendance, progress, certificates, coaRules,
    notifications, auditLog, backups, archiveQueue, reportCatalog, studentCourses, roleLabels
  };
})();
