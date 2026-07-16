import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../../core/constants/app_colors.dart';
import '../../../core/constants/app_styles.dart';
import '../../../core/utils/responsive_layout.dart';
import '../../../models/portfolio_data.dart';
import '../../../widgets/glass_card.dart';

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: ResponsiveSpacing.getHorizontalPadding(context),
        vertical: AppStyles.sectionPadding,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Featured Projects',
            style: AppStyles.textTheme.displaySmall,
          ).animate().fadeIn(duration: 500.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 16),
          Text(
            'A selection of enterprise applications and platforms I have built.',
            style: AppStyles.textTheme.bodyLarge,
          ).animate().fadeIn(delay: 200.ms, duration: 500.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 48),
          _buildProjectsGrid(context),
        ],
      ),
    );
  }

  Widget _buildProjectsGrid(BuildContext context) {
    int crossAxisCount = 1;
    if (ResponsiveLayout.isDesktop(context)) {
      crossAxisCount = 3;
    } else if (ResponsiveLayout.isTablet(context)) {
      crossAxisCount = 2;
    }

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: crossAxisCount,
        crossAxisSpacing: 24,
        mainAxisSpacing: 24,
        childAspectRatio: ResponsiveLayout.isMobile(context) ? 0.8 : 0.85,
      ),
      itemCount: PortfolioData.projects.length,
      itemBuilder: (context, index) {
        return _ProjectCard(
          project: PortfolioData.projects[index],
          index: index,
        );
      },
    );
  }
}

class _ProjectCard extends StatefulWidget {
  final Project project;
  final int index;

  const _ProjectCard({required this.project, required this.index});

  @override
  State<_ProjectCard> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<_ProjectCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        transform: Matrix4.identity()..setTranslationRaw(0.0, _isHovered ? -8.0 : 0.0, 0.0),
        child: GlassCard(
          padding: const EdgeInsets.all(0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Image placeholder / header area
              Expanded(
                flex: 3,
                child: Container(
                  color: AppColors.surfaceLight,
                  child: Center(
                    child: Icon(
                      Icons.dashboard_rounded,
                      size: 64,
                      color: AppColors.secondary.withValues(alpha: 0.5),
                    ),
                  ),
                ),
              ),
              // Content
              Expanded(
                flex: 4,
                child: Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        widget.project.title,
                        style: AppStyles.textTheme.titleLarge,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      const SizedBox(height: 8),
                      Text(
                        widget.project.platform,
                        style: AppStyles.textTheme.labelLarge?.copyWith(
                          color: AppColors.accent,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Expanded(
                        child: Text(
                          widget.project.description,
                          style: AppStyles.textTheme.bodyMedium,
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      const SizedBox(height: 16),
                      Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        children: widget.project.technologies.map((tech) {
                          return Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                            decoration: BoxDecoration(
                              color: AppColors.primary.withValues(alpha: 0.05),
                              borderRadius: BorderRadius.circular(20),
                              border: Border.all(color: AppColors.primary.withValues(alpha: 0.1)),
                            ),
                            child: Text(
                              tech,
                              style: AppStyles.textTheme.labelLarge?.copyWith(
                                fontSize: 12,
                              ),
                            ),
                          );
                        }).toList(),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ).animate().fadeIn(delay: (200 + (widget.index * 100)).ms).slideY(begin: 0.2, end: 0),
    );
  }
}
