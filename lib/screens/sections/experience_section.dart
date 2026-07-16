import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../../core/constants/app_colors.dart';
import '../../../core/constants/app_styles.dart';
import '../../../core/utils/responsive_layout.dart';
import '../../../models/portfolio_data.dart';
import '../../../widgets/glass_card.dart';

class ExperienceSection extends StatelessWidget {
  const ExperienceSection({Key? key}) : super(key: key);

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
            'Work Experience',
            style: AppStyles.textTheme.displaySmall,
          ).animate().fadeIn(duration: 500.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 48),
          ListView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: PortfolioData.experiences.length,
            itemBuilder: (context, index) {
              return _buildExperienceItem(PortfolioData.experiences[index], index, context);
            },
          ),
        ],
      ),
    );
  }

  Widget _buildExperienceItem(Experience exp, int index, BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 48.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Timeline indicator (hidden on mobile for space)
          if (!ResponsiveLayout.isMobile(context))
            Column(
              children: [
                Container(
                  width: 16,
                  height: 16,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: AppColors.accent, width: 4),
                    color: AppColors.background,
                  ),
                ),
                Container(
                  width: 2,
                  height: 200, // Approximate height, or use IntrinsicHeight
                  color: AppColors.secondary.withOpacity(0.2),
                ),
              ],
            ).animate().fadeIn(delay: (200 + index * 100).ms),
          if (!ResponsiveLayout.isMobile(context)) const SizedBox(width: 32),
          
          // Experience Content
          Expanded(
            child: GlassCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    exp.role,
                    style: AppStyles.textTheme.titleLarge?.copyWith(
                      color: AppColors.primary,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 16,
                    runSpacing: 8,
                    children: [
                      Text(
                        exp.company,
                        style: AppStyles.textTheme.titleMedium?.copyWith(
                          color: AppColors.accent,
                        ),
                      ),
                      Text(
                        exp.duration,
                        style: AppStyles.textTheme.bodyMedium?.copyWith(
                          color: AppColors.secondary,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  ...exp.responsibilities.map((resp) {
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 12.0),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(top: 8.0, right: 12.0),
                            child: Icon(
                              Icons.arrow_right_alt_rounded,
                              size: 16,
                              color: AppColors.accent.withOpacity(0.7),
                            ),
                          ),
                          Expanded(
                            child: Text(
                              resp,
                              style: AppStyles.textTheme.bodyMedium,
                            ),
                          ),
                        ],
                      ),
                    );
                  }).toList(),
                ],
              ),
            ).animate().fadeIn(delay: (300 + index * 100).ms).slideX(begin: 0.1, end: 0),
          ),
        ],
      ),
    );
  }
}
