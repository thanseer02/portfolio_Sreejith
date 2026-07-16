import 'package:flutter/material.dart';
import 'core/theme/app_theme.dart';
import 'screens/home/home_screen.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sreejith M - Senior Flutter Developer',
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.dark, // Enforce dark premium theme
      darkTheme: AppTheme.darkTheme,
      home: const HomeScreen(),
    );
  }
}
