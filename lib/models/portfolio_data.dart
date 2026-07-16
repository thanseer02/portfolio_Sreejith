class Experience {
  final String company;
  final String role;
  final String duration;
  final List<String> responsibilities;

  const Experience({
    required this.company,
    required this.role,
    required this.duration,
    required this.responsibilities,
  });
}

class Project {
  final String title;
  final String description;
  final List<String> technologies;
  final String platform;

  const Project({
    required this.title,
    required this.description,
    required this.technologies,
    required this.platform,
  });
}

class SkillCategory {
  final String title;
  final List<String> skills;

  const SkillCategory({
    required this.title,
    required this.skills,
  });
}

class PortfolioData {
  static const String name = 'Sreejith M';
  static const String role = 'Senior Flutter Developer';
  static const String summary =
      'Senior Flutter Developer with 4+ years of experience building scalable Android, iOS, and Flutter Web applications. Experienced in Flutter, Dart, Clean Architecture, MVVM, Firebase, REST APIs, WebSockets, BLE integrations, offline-first applications, payment systems, and AI-assisted software development. Passionate about building high-quality, maintainable applications while leveraging modern AI tools to improve development speed, debugging, architecture, and developer productivity.';
  
  static const String email = 'sreejithgopinadhan073@gmail.com';
  static const String phone = '+91 8921049675';
  static const String linkedIn = 'linkedin.com/in/sreejith-m-393274222';
  static const String github = 'github.com';

  static const List<Experience> experiences = [
    Experience(
      company: 'Mindster (Aufait Technologies)',
      role: 'Senior Flutter Developer',
      duration: 'April 2022 – Present',
      responsibilities: [
        'Developed and maintained enterprise Flutter applications for Android, iOS, and Web.',
        'Implemented Clean Architecture, MVVM, and MVC.',
        'Integrated REST APIs, Firebase, Firestore, WebSockets, BLE devices, and Thermal Printers.',
        'Built offline-first applications with synchronization.',
        'Participated in requirement gathering, sprint planning, estimation, architecture discussions, and code reviews.',
      ],
    ),
    Experience(
      company: 'Keytech Build and Software',
      role: 'Flutter Developer',
      duration: 'August 2021 – March 2022',
      responsibilities: [
        'Built Flutter applications for Android.',
        'Developed reusable UI components.',
        'Integrated REST APIs.',
        'Worked closely with clients and project managers.',
      ],
    ),
  ];

  static const List<SkillCategory> skillCategories = [
    SkillCategory(title: 'Programming', skills: ['Dart', 'Java (Basic)', 'Kotlin (Basic)']),
    SkillCategory(title: 'Frameworks', skills: ['Flutter', 'Flutter Web']),
    SkillCategory(title: 'Architecture', skills: ['Clean Architecture', 'MVVM', 'MVC']),
    SkillCategory(title: 'State Management', skills: ['Provider', 'Bloc']),
    SkillCategory(title: 'Backend', skills: ['REST APIs', 'Firebase', 'Firestore', 'WebSockets']),
    SkillCategory(title: 'Database', skills: ['SQLite', 'Hive', 'Shared Preferences']),
    SkillCategory(title: 'Maps & Location', skills: ['Google Maps', 'Geolocation', 'Geocoding']),
    SkillCategory(title: 'Hardware', skills: ['BLE', 'Thermal Printers']),
    SkillCategory(title: 'Developer Tools', skills: ['Git', 'Jira', 'Redmine', 'Android Studio', 'VS Code', 'Postman']),
    SkillCategory(title: 'AI Development Tools', skills: ['ChatGPT', 'Claude', 'Cursor AI', 'GitHub Copilot', 'Gemini', 'Android Studio Gemini', 'MCP Tools', 'Antigravity']),
  ];

  static const List<Project> projects = [
    Project(
      title: 'IDrive Salesman App',
      description: 'Enterprise field sales & distribution platform deployed across India, UAE, and KSA.',
      technologies: ['Flutter', 'REST APIs', 'Offline Sync', 'Firebase'],
      platform: 'Android / iOS',
    ),
    Project(
      title: 'ONEIC Pay',
      description: 'Utility bill payment and digital wallet application supporting secure payments and peer-to-peer transfers.',
      technologies: ['Flutter', 'REST APIs', 'Payment Gateway', 'Firebase'],
      platform: 'Android / iOS',
    ),
    Project(
      title: 'iTravel Check-In',
      description: 'Cruise ship onboarding application supporting passport, visa, and ID card scanning.',
      technologies: ['Flutter', 'Document Scanning', 'REST APIs'],
      platform: 'Tablet / Kiosk',
    ),
    Project(
      title: 'Shahn Truck Booking',
      description: 'Logistics and truck booking platform with real-time tracking and Google Maps integration.',
      technologies: ['Flutter', 'Google Maps', 'Location Tracking', 'REST APIs'],
      platform: 'Android / iOS',
    ),
    Project(
      title: 'SMA HRMS',
      description: 'Enterprise HRMS platform supporting attendance, payroll, leave management, and approvals.',
      technologies: ['Flutter', 'REST APIs', 'Firebase'],
      platform: 'Web / Mobile',
    ),
    Project(
      title: 'ACIX Locker Management',
      description: 'Smart locker ecosystem integrating BLE devices and LAN-based locking mechanisms.',
      technologies: ['Flutter', 'BLE', 'IoT', 'LAN Communication'],
      platform: 'Tablet / Embedded',
    ),
  ];
}
