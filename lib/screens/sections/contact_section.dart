import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../core/constants/app_colors.dart';
import '../../../core/constants/app_styles.dart';
import '../../../core/utils/responsive_layout.dart';
import '../../../models/portfolio_data.dart';
import '../../../widgets/glass_card.dart';
import '../../../widgets/primary_button.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: ResponsiveSpacing.getHorizontalPadding(context),
        vertical: AppStyles.sectionPadding,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            'Get In Touch',
            style: AppStyles.textTheme.displaySmall,
            textAlign: TextAlign.center,
          ).animate().fadeIn(duration: 500.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 16),
          Text(
            "I'm always open to discussing new enterprise-grade projects, creative ideas or opportunities.",
            style: AppStyles.textTheme.bodyLarge,
            textAlign: TextAlign.center,
          ).animate().fadeIn(delay: 200.ms).slideY(begin: 0.2, end: 0),
          const SizedBox(height: 64),
          ResponsiveLayout.isMobile(context)
              ? Column(
                  children: [
                    _buildContactInfo(),
                    const SizedBox(height: 48),
                    _buildContactForm(),
                  ],
                )
              : Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(flex: 2, child: _buildContactInfo()),
                    const SizedBox(width: 64),
                    Expanded(flex: 3, child: _buildContactForm()),
                  ],
                ),
        ],
      ),
    );
  }

  Widget _buildContactInfo() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildContactItem(Icons.email_outlined, 'Email', PortfolioData.email, () {
          _launchUrl('mailto:${PortfolioData.email}');
        }),
        const SizedBox(height: 24),
        _buildContactItem(Icons.phone_outlined, 'Phone', PortfolioData.phone, () {
          _launchUrl('tel:${PortfolioData.phone}');
        }),
        const SizedBox(height: 24),
        _buildContactItem(Icons.link_rounded, 'LinkedIn', PortfolioData.linkedIn, () {
          _launchUrl('https://${PortfolioData.linkedIn}');
        }),
      ],
    ).animate().fadeIn(delay: 300.ms);
  }

  Widget _buildContactItem(IconData icon, String title, String subtitle, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: AppColors.surfaceLight,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Icon(icon, color: AppColors.accent),
            ),
            const SizedBox(width: 24),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: AppStyles.textTheme.labelLarge),
                  const SizedBox(height: 4),
                  Text(
                    subtitle,
                    style: AppStyles.textTheme.bodyMedium?.copyWith(
                      color: AppColors.primary,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildContactForm() {
    return GlassCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('Send a Message', style: AppStyles.textTheme.titleLarge),
          const SizedBox(height: 24),
          _buildTextField('Name'),
          const SizedBox(height: 16),
          _buildTextField('Email'),
          const SizedBox(height: 16),
          _buildTextField('Message', maxLines: 4),
          const SizedBox(height: 24),
          PrimaryButton(
            text: 'Send Message',
            icon: Icons.send_rounded,
            onPressed: () {},
          ),
        ],
      ),
    ).animate().fadeIn(delay: 400.ms).slideX(begin: 0.1, end: 0);
  }

  Widget _buildTextField(String label, {int maxLines = 1}) {
    return TextField(
      maxLines: maxLines,
      style: AppStyles.textTheme.bodyMedium,
      decoration: InputDecoration(
        labelText: label,
        labelStyle: AppStyles.textTheme.bodyMedium,
        filled: true,
        fillColor: AppColors.background.withValues(alpha: 0.5),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: AppColors.secondary.withValues(alpha: 0.2)),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: BorderSide(color: AppColors.secondary.withValues(alpha: 0.2)),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: AppColors.accent),
        ),
      ),
    );
  }
}
