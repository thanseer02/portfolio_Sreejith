import 'dart:ui';
import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_styles.dart';

class GlassCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry padding;
  final double? width;
  final double? height;

  const GlassCard({
    Key? key,
    required this.child,
    this.padding = const EdgeInsets.all(AppStyles.paddingLarge),
    this.width,
    this.height,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        color: AppColors.surface.withOpacity(0.4),
        borderRadius: BorderRadius.circular(AppStyles.borderRadius),
        border: Border.all(
          color: AppColors.primary.withOpacity(0.05),
          width: 1,
        ),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(AppStyles.borderRadius),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
          child: Padding(
            padding: padding,
            child: child,
          ),
        ),
      ),
    );
  }
}
