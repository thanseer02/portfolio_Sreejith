import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../../core/constants/app_colors.dart';
import '../../../core/constants/app_styles.dart';
import '../../../core/utils/responsive_layout.dart';
import '../../../models/portfolio_data.dart';
import '../../../widgets/glass_card.dart';

class SkillsSection extends StatelessWidget {
  const SkillsSection({Key? key}) : super(key: key);

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
            'Technical Arsenal',
            style: AppStyles.textTheme.displaySmall,
          ).animate().fadeIn(duration: 500.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 16),
          Text(
            'Technologies and tools I use to build robust, scalable applications.',
            style: AppStyles.textTheme.bodyLarge,
          ).animate().fadeIn(delay: 200.ms, duration: 500.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 48),
          
          _buildSkillsGrid(context),
        ],
      ),
    );
  }

  Widget _buildSkillsGrid(BuildContext context) {
    int crossAxisCount = 1;
    if (ResponsiveLayout.isDesktop(context)) crossAxisCount = 3;
    else if (ResponsiveLayout.isTablet(context)) crossAxisCount = 2;

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: crossAxisCount,
        crossAxisSpacing: 24,
        mainAxisSpacing: 24,
        childAspectRatio: ResponsiveLayout.isMobile(context) ? 1.5 : 1.2,
      ),
      itemCount: PortfolioData.skillCategories.length,
      itemBuilder: (context, index) {
        final category = PortfolioData.skillCategories[index];
        return GlassCard(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(
                    Icons.terminal_rounded, 
                    color: AppColors.accent,
                    size: 24,
                  ),
                  const SizedBox(width: 12),
                  Text(
                    category.title,
                    style: AppStyles.textTheme.titleMedium,
                  ),
                ],
              ),
              const SizedBox(height: 16),
              const Divider(color: AppColors.surfaceLight),
              const SizedBox(height: 16),
              Expanded(
                child: Wrap(
                  spacing: 8,
                  runSpacing: 12,
                  children: category.skills.map((skill) {
                    return Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                      decoration: BoxDecoration(
                        color: AppColors.surfaceLight,
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        skill,
                        style: AppStyles.textTheme.labelLarge,
                      ),
                    );
                  }).toList(),
                ),
              ),
            ],
          ),
        ).animate().fadeIn(delay: (200 + (index * 50)).ms).scale(begin: const Offset(0.95, 0.95));
      },
    );
  }
}
