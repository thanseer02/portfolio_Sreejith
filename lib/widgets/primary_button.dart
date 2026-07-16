import 'package:flutter/material.dart';
import '../../core/constants/app_colors.dart';
import '../../core/constants/app_styles.dart';

class PrimaryButton extends StatefulWidget {
  final String text;
  final VoidCallback onPressed;
  final bool outlined;
  final IconData? icon;

  const PrimaryButton({
    Key? key,
    required this.text,
    required this.onPressed,
    this.outlined = false,
    this.icon,
  }) : super(key: key);

  @override
  State<PrimaryButton> createState() => _PrimaryButtonState();
}

class _PrimaryButtonState extends State<PrimaryButton> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        curve: Curves.easeInOut,
        transform: Matrix4.identity()..scale(_isHovered ? 1.05 : 1.0),
        child: widget.outlined
            ? OutlinedButton.icon(
                onPressed: widget.onPressed,
                icon: widget.icon != null ? Icon(widget.icon) : const SizedBox.shrink(),
                label: Text(widget.text),
              )
            : ElevatedButton.icon(
                onPressed: widget.onPressed,
                icon: widget.icon != null ? Icon(widget.icon) : const SizedBox.shrink(),
                label: Text(widget.text),
              ),
      ),
    );
  }
}
