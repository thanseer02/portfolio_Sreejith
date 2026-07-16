import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../../core/constants/app_colors.dart';
import '../../../core/constants/app_styles.dart';
import '../../../core/utils/responsive_layout.dart';
import '../../../models/portfolio_data.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: ResponsiveSpacing.getHorizontalPadding(context),
        vertical: AppStyles.sectionPadding,
      ),
      child: ResponsiveLayout.isMobile(context)
          ? Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildHeader(),
                const SizedBox(height: 32),
                _buildContent(),
              ],
            )
          : Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  flex: 2,
                  child: _buildHeader(),
                ),
                const SizedBox(width: 48),
                Expanded(
                  flex: 3,
                  child: _buildContent(),
                ),
              ],
            ),
    );
  }

  Widget _buildHeader() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'About Me',
          style: AppStyles.textTheme.displaySmall,
        ).animate().fadeIn(duration: 500.ms).slideY(begin: 0.2, end: 0),
        const SizedBox(height: 16),
        Container(
          height: 4,
          width: 64,
          color: AppColors.accent,
        ).animate().fadeIn(delay: 200.ms).scaleX(begin: 0),
      ],
    );
  }

  Widget _buildContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          PortfolioData.summary,
          style: AppStyles.textTheme.bodyLarge?.copyWith(
            height: 1.8,
          ),
        ).animate().fadeIn(delay: 300.ms, duration: 500.ms).slideY(begin: 0.1, end: 0),
        const SizedBox(height: 32),
        Wrap(
          spacing: 32,
          runSpacing: 32,
          children: [
            _buildStatItem('4+', 'Years Experience'),
            _buildStatItem('10+', 'Enterprise Apps'),
            _buildStatItem('3', 'Platforms (iOS, Android, Web)'),
          ],
        ).animate().fadeIn(delay: 500.ms),
      ],
    );
  }

  Widget _buildStatItem(String number, String label) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          number,
          style: AppStyles.textTheme.displayMedium?.copyWith(
            color: AppColors.primary,
          ),
        ),
        const SizedBox(height: 8),
        Text(
          label,
          style: AppStyles.textTheme.labelLarge?.copyWith(
            color: AppColors.secondary,
          ),
        ),
      ],
    );
  }
}
