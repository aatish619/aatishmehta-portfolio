"""Generate Aatish Mehta's resume PDF using reportlab.

Run from project root: python3 scripts/build-resume.py
Outputs: public/resume/aatish-mehta-resume.pdf
"""
import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    KeepTogether,
)

OUT_PATH = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..",
    "public",
    "resume",
    "aatish-mehta-resume.pdf",
)

NAVY = HexColor("#0F172A")
SLATE = HexColor("#334155")
MUTED = HexColor("#64748B")
ACCENT = HexColor("#4338CA")
RULE = HexColor("#E2E8F0")


def build():
    doc = SimpleDocTemplate(
        OUT_PATH,
        pagesize=LETTER,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        topMargin=0.6 * inch,
        bottomMargin=0.6 * inch,
        title="Aatish Mehta — Resume",
        author="Aatish Mehta",
    )
    styles = getSampleStyleSheet()

    h_name = ParagraphStyle(
        "Name", parent=styles["Heading1"],
        fontName="Helvetica-Bold", fontSize=22, leading=26,
        textColor=NAVY, spaceAfter=2, alignment=TA_LEFT,
    )
    h_role = ParagraphStyle(
        "Role", parent=styles["Normal"],
        fontName="Helvetica", fontSize=11, leading=14,
        textColor=ACCENT, spaceAfter=4,
    )
    h_contact = ParagraphStyle(
        "Contact", parent=styles["Normal"],
        fontName="Helvetica", fontSize=9, leading=12,
        textColor=SLATE, spaceAfter=8,
    )
    h_section = ParagraphStyle(
        "Section", parent=styles["Heading2"],
        fontName="Helvetica-Bold", fontSize=11, leading=14,
        textColor=NAVY, spaceBefore=10, spaceAfter=4,
    )
    h_role_title = ParagraphStyle(
        "RoleTitle", parent=styles["Normal"],
        fontName="Helvetica-Bold", fontSize=10, leading=13,
        textColor=NAVY,
    )
    h_meta = ParagraphStyle(
        "Meta", parent=styles["Normal"],
        fontName="Helvetica-Oblique", fontSize=9, leading=11,
        textColor=MUTED, spaceAfter=4,
    )
    h_body = ParagraphStyle(
        "Body", parent=styles["Normal"],
        fontName="Helvetica", fontSize=9.5, leading=13,
        textColor=SLATE, spaceAfter=3,
    )
    h_bullet = ParagraphStyle(
        "Bullet", parent=h_body,
        leftIndent=10, bulletIndent=0, spaceAfter=2,
    )
    h_skill = ParagraphStyle(
        "Skill", parent=styles["Normal"],
        fontName="Helvetica", fontSize=9, leading=12,
        textColor=SLATE,
    )

    story = []

    # Header
    story.append(Paragraph("Aatish Mehta", h_name))
    story.append(Paragraph("Senior Mobile Engineer · Flutter, Native iOS & Android", h_role))
    story.append(Paragraph(
        "📧 aatishm449@gmail.com · 📱 +91 7383667590 · 📍 India · "
        "<font color='#4338CA'>linkedin.com/in/aatishmehta17</font> · "
        "<font color='#4338CA'>github.com/aatish619</font>",
        h_contact,
    ))

    # Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", h_section))
    story.append(Paragraph(
        "Senior Mobile Engineer with 5+ years of experience designing and shipping "
        "high-performance, production-grade applications across Flutter, Native iOS, "
        "and Android. Strong foundation in Clean Architecture, BLoC, offline-first "
        "systems, and AI integration. Led engineering teams of up to 15, scaled apps "
        "to 1M+ active users, and consistently delivered measurable business impact.",
        h_body,
    ))

    def add_experience(company, role, dates, location, bullets):
        items = [
            Paragraph(f"{role} — <b>{company}</b>", h_role_title),
            Paragraph(f"{dates} · {location}", h_meta),
        ]
        for b in bullets:
            items.append(Paragraph(f"• {b}", h_bullet))
        items.append(Spacer(1, 6))
        story.append(KeepTogether(items[:2]))
        for b in bullets:
            story.append(Paragraph(f"• {b}", h_bullet))
        story.append(Spacer(1, 4))

    # Experience
    story.append(Paragraph("EXPERIENCE", h_section))

    add_experience(
        "Enterprise Logistics & Delivery Platform",
        "Senior Mobile Engineer",
        "Jan 2024 – Present",
        "Remote",
        [
            "Lead mobile architecture for a high-volume delivery platform used by 100K+ "
            "concurrent users, with a focus on Clean Architecture, BLoC, and offline-first sync.",
            "Cut crash-free sessions from 94% → 99.8% and reduced CI/CD pipeline build "
            "time by 40% through caching and parallelisation.",
            "Mentor a team of 10+ engineers on state management, code review standards, "
            "and architectural decision-making.",
        ],
    )
    add_experience(
        "DCM Shriram Agritech (Smart Fasal)",
        "Lead Mobile Developer",
        "2022 – 2023",
        "Hybrid",
        [
            "Led the end-to-end Flutter development of a crop-management app deployed to "
            "10,000+ farmers across rural India.",
            "Architected the offline-first data layer (Hive + REST) to handle "
            "intermittent connectivity; achieved 95% crash-free rate in the field.",
            "Integrated on-device ML (TensorFlow Lite) for crop disease detection.",
        ],
    )
    add_experience(
        "Show United — Premium Entertainment Platform",
        "Lead Mobile Engineer",
        "2021 – 2022",
        "Remote",
        [
            "Designed the entire Flutter codebase from scratch using Clean Architecture "
            "and BLoC, scaling to 1M+ active users with < 0.1% crash rate.",
            "Optimised video rendering and memory management to ensure 60fps playback "
            "on low-end Android devices.",
        ],
    )
    add_experience(
        "Healthcare App Solutions (ECMIS, Orthovoip)",
        "Mobile Engineer (iOS & Android)",
        "2019 – 2021",
        "On-site",
        [
            "Built HIPAA-compliant patient-doctor communication and VoIP apps for "
            "50+ clinics with < 150ms cross-country call latency.",
            "Migrated a legacy Java Android codebase to Kotlin with zero downtime.",
        ],
    )

    # Skills
    story.append(Paragraph("TECHNICAL SKILLS", h_section))
    skills_data = [
        ["Mobile", "Flutter, Dart, Swift, Kotlin, Java, Objective-C, BLoC, Riverpod, MVVM, Clean Architecture"],
        ["Backend", "Node.js, Python, REST APIs, GraphQL, WebSockets, Firebase, Redis"],
        ["AI", "OpenAI API, LLM integration, TensorFlow Lite, on-device ML, prompt engineering"],
        ["Cloud / DevOps", "Firebase, AWS, GCP, CI/CD, Fastlane, Docker, Git, GitHub Actions"],
    ]
    skills_table = Table(skills_data, colWidths=[1.1 * inch, 5.6 * inch])
    skills_table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9.5),
        ("TEXTCOLOR", (0, 0), (0, -1), NAVY),
        ("TEXTCOLOR", (1, 0), (1, -1), SLATE),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(skills_table)

    # Selected projects
    story.append(Paragraph("SELECTED PROJECTS", h_section))
    for name, desc in [
        ("Mrsool — MENA Delivery Platform",
         "Native iOS & Android. Real-time WebSocket tracking, 100K+ peak concurrent users."),
        ("Smart Fasal — Agritech",
         "Flutter, offline-first. Deployed to 10,000+ farmers. 95% crash-free."),
        ("Show United — Streaming",
         "Flutter Clean Architecture. 1M+ active users, < 0.1% crash rate, 60fps playback."),
        ("ECMIS — Healthcare MIS",
         "Cross-platform Flutter + Node.js + GraphQL. HIPAA-compliant, 15+ hospital networks."),
        ("Orbis Mortgage — FinTech",
         "Flutter + Plaid + Stripe. Processed $50M+ in applications in year one. 4.9★ App Store."),
    ]:
        story.append(Paragraph(f"<b>{name}</b>", h_role_title))
        story.append(Paragraph(desc, h_body))

    # Education
    story.append(Paragraph("EDUCATION", h_section))
    story.append(Paragraph("<b>Bachelor of Engineering, Information Technology</b>", h_role_title))
    story.append(Paragraph(
        "Gujarat Technological University · 2014 – 2018",
        h_meta,
    ))

    # Footer line
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "References available on request. This resume is auto-generated and kept in sync with the portfolio at aatishmehta.com.",
        ParagraphStyle("foot", parent=h_body, fontSize=8, textColor=MUTED, alignment=TA_LEFT),
    ))

    doc.build(story)
    print(f"Wrote {OUT_PATH}")


if __name__ == "__main__":
    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    build()
