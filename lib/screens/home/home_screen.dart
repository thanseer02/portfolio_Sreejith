import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_styles.dart';
import '../sections/hero_section.dart';
import '../sections/about_section.dart';
import '../sections/skills_section.dart';
import '../sections/experience_section.dart';
import '../sections/projects_section.dart';
import '../sections/education_section.dart';
import '../sections/contact_section.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final GlobalKey _aboutKey = GlobalKey();
  final GlobalKey _skillsKey = GlobalKey();
  final GlobalKey _experienceKey = GlobalKey();
  final GlobalKey _projectsKey = GlobalKey();
  final GlobalKey _contactKey = GlobalKey();

  void _scrollToSection(GlobalKey key) {
    if (key.currentContext != null) {
      Scrollable.ensureVisible(
        key.currentContext!,
        duration: const Duration(milliseconds: 800),
        curve: Curves.easeInOut,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            floating: true,
            pinned: true,
            backgroundColor: AppColors.background.withValues(alpha: 0.9),
            elevation: 0,
            title: GestureDetector(
              onTap: () {
                // Scroll to top
                Scrollable.ensureVisible(
                  context,
                  duration: const Duration(milliseconds: 800),
                  curve: Curves.easeInOut,
                );
              },
              child: Text(
                'Sreejith M.',
                style: AppStyles.textTheme.titleLarge?.copyWith(
                  color: AppColors.primary,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            actions: [
              TextButton(
                onPressed: () => _scrollToSection(_aboutKey),
                child: Text('About', style: AppStyles.textTheme.labelLarge),
              ),
              TextButton(
                onPressed: () => _scrollToSection(_skillsKey),
                child: Text('Skills', style: AppStyles.textTheme.labelLarge),
              ),
              TextButton(
                onPressed: () => _scrollToSection(_experienceKey),
                child: Text('Experience', style: AppStyles.textTheme.labelLarge),
              ),
              TextButton(
                onPressed: () => _scrollToSection(_projectsKey),
                child: Text('Projects', style: AppStyles.textTheme.labelLarge),
              ),
              TextButton(
                onPressed: () => _scrollToSection(_contactKey),
                child: Text('Contact', style: AppStyles.textTheme.labelLarge),
              ),
              const SizedBox(width: 16),
            ],
          ),
          SliverList(
            delegate: SliverChildListDelegate([
              HeroSection(onContactPressed: () => _scrollToSection(_contactKey)),
              Container(key: _aboutKey, child: const AboutSection()),
              Container(key: _skillsKey, child: const SkillsSection()),
              Container(key: _experienceKey, child: const ExperienceSection()),
              Container(key: _projectsKey, child: const ProjectsSection()),
              const EducationSection(),
              Container(key: _contactKey, child: const ContactSection()),
              _buildFooter(),
            ]),
          ),
        ],
      ),
    );
  }

  Widget _buildFooter() {
    return Container(
      padding: const EdgeInsets.all(AppStyles.paddingLarge),
      alignment: Alignment.center,
      child: Text(
        '© ${DateTime.now().year} Sreejith M. Built with Flutter Web.',
        style: AppStyles.textTheme.bodyMedium,
      ),
    );
  }
}
