import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  @ViewChild('accordionItems', { static: true }) accordionItemsRef!: ElementRef;
  benefits: any[] = [
    {
      title: 'Healthcare coverage',
      description: `We provide comprehensive healthcare coverage to ensure the well-being of our employees. Our healthcare benefits include medical, dental, and vision insurance, as well as access to a wide network of healthcare providers. We understand the importance of taking care of your health, and our coverage extends to preventative care, prescription medications, and specialized treatments. Your well-being is our priority. <br><br> For more information, please refer to the <a href="../../../assets/documents/Benefits manual Moback technologies 2023-24.pdf" download>Healthcare Coverage PDF</a>.`,
      expanded: false
    },
   
    {
      title: 'Flexible work schedule',
      description: `We understand the importance of work-life balance, and our flexible work schedule allows employees to manage their time effectively. We offer flexible start and end times, as well as options for remote work and compressed workweeks. Whether you need to accommodate personal commitments, avoid traffic congestion, or simply prefer working during your most productive hours, our flexible work schedule empowers you to find the balance that works best for you. <br><br> For more information, please refer to the <a href="../../../assets/documents/Moback IDC - Leave, Working Hours and Holiday Policy.pdf" download>Flexible Work Schedule PDF</a>.`,
      expanded: false
    },
    {
      title: 'Professional development opportunities',
      description: `We encourage continuous learning and growth by providing various professional development opportunities. Our professional development benefits include access to online courses, conferences, workshops, and mentoring programs. We believe that investing in your skills and knowledge not only benefits you but also contributes to the overall success of our organization. We are committed to supporting your career advancement and helping you reach your full potential. <br><br> For more information, please refer to the <a href="../../../assets/documents/Moback IDC - Rewards & Recognition Policy" download>Rewards& Regonition PDF</a> <br><a href="../../../assets/documents/Moback IDC - Training and Certification .pdf" download>Training and Certification Policy PDF</a>.`,
      expanded: false
    },
    {
      title: 'Paid time off and holidays',
      description: `We value the importance of rest and relaxation, and provide paid time off and holidays for employees to recharge and spend time with their loved ones. Our paid time off benefits include vacation days, personal days, and company-wide holidays. We understand that taking breaks is essential for maintaining well-being and productivity, and we encourage you to take the time you need to rest, rejuvenate, and enjoy life outside of work. <br><br> For more information, please refer to the <a href="../../../assets/documents/Moback IDC Holiday List for Year 2023" download>Paid Time Off PDF</a>.`,
      expanded: false
    },
    {
      title: 'Retirement plans',
      description: `We offer retirement plans to help our employees secure their financial future. Our retirement benefits include a 401(k) plan with a generous employer match, ensuring that you can save for retirement with ease. We also provide financial planning resources and guidance to help you make informed decisions about your retirement savings. We believe in supporting you throughout your career and beyond. <br><br> For more information, please refer to the <a href="link-to-retirement-plans.pdf" download>Retirement Plans PDF</a>.`,
      expanded: false
    },
  ];
  
  
  showModal: boolean = false; // Add this property

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const accordionItems = this.accordionItemsRef.nativeElement.querySelectorAll('.accordion-item');

    accordionItems.forEach((item: any) => {
      const heading = item.querySelector('.accordion-heading');
      const content = item.querySelector('.accordion-content');

      heading.addEventListener('click', () => {
        item.classList.toggle('active');
        content.classList.toggle('show');
      });
    });
  }

  getSafeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }
  toggleAccordion(benefit: any) {
    benefit.expanded = !benefit.expanded;
  }
}
