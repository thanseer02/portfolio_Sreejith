import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_styles.dart';
import '../sections/hero_section.dart';
import '../sections/about_section.dart';
import '../sections/skills_section.dart';
import '../sections/experience_section.dart';
import '../sections/projects_section.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            floating: true,
            pinned: true,
            backgroundColor: AppColors.background.withOpacity(0.9),
            elevation: 0,
            title: Text(
              'Sreejith M.',
              style: AppStyles.textTheme.titleLarge?.copyWith(
                color: AppColors.primary,
                fontWeight: FontWeight.bold,
              ),
            ),
            actions: [
              TextButton(
                onPressed: () {},
                child: Text('About', style: AppStyles.textTheme.labelLarge),
              ),
              TextButton(
                onPressed: () {},
                child: Text('Experience', style: AppStyles.textTheme.labelLarge),
              ),
              TextButton(
                onPressed: () {},
                child: Text('Projects', style: AppStyles.textTheme.labelLarge),
              ),
              const SizedBox(width: 16),
            ],
          ),
          SliverList(
            delegate: SliverChildListDelegate([
              const HeroSection(),
              const AboutSection(),
              const SkillsSection(),
              const ExperienceSection(),
              const ProjectsSection(),
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
