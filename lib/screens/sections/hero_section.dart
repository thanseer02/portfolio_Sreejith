import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../../core/constants/app_colors.dart';
import '../../../core/constants/app_styles.dart';
import '../../../core/utils/responsive_layout.dart';
import '../../../models/portfolio_data.dart';
import '../../../widgets/primary_button.dart';

class HeroSection extends StatelessWidget {
  const HeroSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(minHeight: 800),
      padding: EdgeInsets.symmetric(
        horizontal: ResponsiveSpacing.getHorizontalPadding(context),
        vertical: AppStyles.sectionPadding,
      ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              decoration: BoxDecoration(
                color: AppColors.surface,
                borderRadius: BorderRadius.circular(30),
                border: Border.all(color: AppColors.secondary.withOpacity(0.2)),
              ),
              child: Text(
                'Available for new opportunities',
                style: AppStyles.textTheme.labelLarge?.copyWith(
                  color: AppColors.success,
                ),
              ),
            ).animate().fadeIn(duration: 500.ms).slideY(begin: -0.5, end: 0),
            
            const SizedBox(height: 32),
            
            Text(
              PortfolioData.name,
              style: ResponsiveLayout.isMobile(context)
                  ? AppStyles.textTheme.displayMedium
                  : AppStyles.textTheme.displayLarge,
              textAlign: TextAlign.center,
            )
                .animate()
                .fadeIn(delay: 200.ms, duration: 600.ms)
                .slideY(begin: 0.2, end: 0),
            
            const SizedBox(height: 16),
            
            Text(
              PortfolioData.role,
              style: AppStyles.textTheme.headlineMedium?.copyWith(
                color: AppColors.accent,
              ),
              textAlign: TextAlign.center,
            )
                .animate()
                .fadeIn(delay: 400.ms, duration: 600.ms)
                .slideY(begin: 0.2, end: 0),
            
            const SizedBox(height: 32),
            
            SizedBox(
              width: ResponsiveLayout.isMobile(context) ? double.infinity : 600,
              child: Text(
                PortfolioData.summary,
                style: AppStyles.textTheme.bodyLarge,
                textAlign: TextAlign.center,
              ),
            )
                .animate()
                .fadeIn(delay: 600.ms, duration: 600.ms)
                .slideY(begin: 0.2, end: 0),
            
            const SizedBox(height: 48),
            
            Wrap(
              spacing: 16,
              runSpacing: 16,
              alignment: WrapAlignment.center,
              children: [
                PrimaryButton(
                  text: 'Download Resume',
                  icon: Icons.download_rounded,
                  onPressed: () {
                    // Logic to download resume
                  },
                ),
                PrimaryButton(
                  text: 'Contact Me',
                  icon: Icons.mail_outline_rounded,
                  outlined: true,
                  onPressed: () {
                    // Logic to scroll to contact
                  },
                ),
              ],
            )
                .animate()
                .fadeIn(delay: 800.ms, duration: 600.ms)
                .slideY(begin: 0.2, end: 0),
          ],
        ),
      ),
    );
  }
}
