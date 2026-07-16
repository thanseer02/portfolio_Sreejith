import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'app_colors.dart';

class AppStyles {
  static const double mobileBreakpoint = 768;
  static const double tabletBreakpoint = 1024;
  static const double desktopBreakpoint = 1440;

  static const double paddingSmall = 8.0;
  static const double paddingMedium = 16.0;
  static const double paddingLarge = 24.0;
  static const double paddingXLarge = 48.0;
  static const double sectionPadding = 120.0;
  
  static const double borderRadius = 16.0;

  // Typography
  static TextTheme textTheme = TextTheme(
    displayLarge: GoogleFonts.inter(
      fontSize: 64,
      fontWeight: FontWeight.bold,
      color: AppColors.primary,
      letterSpacing: -1.5,
    ),
    displayMedium: GoogleFonts.inter(
      fontSize: 48,
      fontWeight: FontWeight.bold,
      color: AppColors.primary,
      letterSpacing: -1.0,
    ),
    displaySmall: GoogleFonts.inter(
      fontSize: 40,
      fontWeight: FontWeight.w600,
      color: AppColors.primary,
      letterSpacing: -0.5,
    ),
    headlineMedium: GoogleFonts.inter(
      fontSize: 32,
      fontWeight: FontWeight.w600,
      color: AppColors.primary,
    ),
    titleLarge: GoogleFonts.inter(
      fontSize: 24,
      fontWeight: FontWeight.w600,
      color: AppColors.primary,
    ),
    titleMedium: GoogleFonts.inter(
      fontSize: 20,
      fontWeight: FontWeight.w600,
      color: AppColors.primary,
    ),
    bodyLarge: GoogleFonts.dmSans(
      fontSize: 18,
      fontWeight: FontWeight.normal,
      color: AppColors.text,
      height: 1.6,
    ),
    bodyMedium: GoogleFonts.dmSans(
      fontSize: 16,
      fontWeight: FontWeight.normal,
      color: AppColors.secondary,
      height: 1.5,
    ),
    labelLarge: GoogleFonts.dmSans(
      fontSize: 14,
      fontWeight: FontWeight.w500,
      color: AppColors.primary,
    ),
  );
}
