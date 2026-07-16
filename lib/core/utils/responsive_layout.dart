import 'package:flutter/material.dart';
import '../constants/app_styles.dart';

class ResponsiveLayout extends StatelessWidget {
  final Widget mobile;
  final Widget? tablet;
  final Widget desktop;

  const ResponsiveLayout({
    Key? key,
    required this.mobile,
    this.tablet,
    required this.desktop,
  }) : super(key: key);

  static bool isMobile(BuildContext context) =>
      MediaQuery.of(context).size.width < AppStyles.mobileBreakpoint;

  static bool isTablet(BuildContext context) =>
      MediaQuery.of(context).size.width >= AppStyles.mobileBreakpoint &&
      MediaQuery.of(context).size.width < AppStyles.tabletBreakpoint;

  static bool isDesktop(BuildContext context) =>
      MediaQuery.of(context).size.width >= AppStyles.tabletBreakpoint;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth >= AppStyles.tabletBreakpoint) {
          return desktop;
        } else if (constraints.maxWidth >= AppStyles.mobileBreakpoint) {
          return tablet ?? mobile;
        } else {
          return mobile;
        }
      },
    );
  }
}

// Adaptive spacing utility
class ResponsiveSpacing {
  static double getHorizontalPadding(BuildContext context) {
    if (ResponsiveLayout.isDesktop(context)) {
      return AppStyles.paddingXLarge * 2;
    } else if (ResponsiveLayout.isTablet(context)) {
      return AppStyles.paddingXLarge;
    } else {
      return AppStyles.paddingLarge;
    }
  }
}
