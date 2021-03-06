import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.jpg',
      title: 'Founder and Head of Technology',
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
    },
    {
      name: 'Geoffery Melle',
      image: './../../assets/headshot-geoff.jpg',
      title: 'Account Manager',
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.jpg',
      title: 'Designer',
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Joni Leho',
      image: './../../assets/headshot-joni.jpg',
      title: 'Software Engineer',
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
    },
    {
      name: 'Auvo Severinkangas',
      image: './../../assets/headshot-auvo.jpg',
      title: 'Software Engineer',
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.jpg',
      title: 'Software Engineer',
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
    },
    {
      name: 'Mohammad Alfatih',
      image: './../../assets/headshot-mohammad.jpg',
      title: 'Software Engineer',
      mail: 'mo@jawami.com',
      twitter: 'https://twitter.com/webdevffw',
      github: 'https://github.com/Mohammad-alfatih',
    },
    {
      name: 'Meredith Alcorn',
      image: './../../assets/headshot-meredith.jpg',
      title: 'Software Engineer',
      mail: 'meredith@openforge.io',
      github: 'https://github.com/mmalcorn',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fernando.jpg',
      title: 'Software Engineer',
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
    },
    {
      name: 'William Holloran',
      image: './../../assets/headshot-billy.jpg',
      title: 'Project Manager / QA Engineer',
      mail: 'william@openforge.io',
    },
    {
      name: 'Luis Chacon',
      image: './../../assets/headshot-luis.jpg',
      title: 'Software Engineer',
      mail: 'luis@openforge.io',
      github: 'https://github.com/luiskcs89',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.jpg',
      title: 'Software Engineer',
      mail: 'claudio@openforge.io',
      github: 'https://github.com/daftclaud',
    },
    {
      name: 'Elizabeth Cottrell',
      image: './../../assets/headshot-eliza.jpg',
      title: 'Front End Developer',
      mail: 'elizabeth@openforge.io',
      twitter: 'https://twitter.com/_elizacottrell',
      github: 'https://github.com/LizCottrell',
    },
    {
      name: 'Yanying Zhu',
      image: './../../assets/headshot-yanying.jpg',
      title: 'Designer',
      mail: 'yanying@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'YOU?',
      image: './../../assets/headshot-placeholder.jpg',
      title: '',
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
      href: '/opportunities',
    },
  ];

  componentDidLoad() {
    this.handleImage();
  }

  @Listen('window:resize')
  handleImage() {
    let element;
    try {
      element = document.querySelector('.about .hero');
      element.style.backgroundImage = `url('assets/bg-hero-icons.jpg')`;
    } catch (e) {
      console.log('app-about-header undefined', e);
    }

    if (window.innerWidth < 576) {
      // small
      element.style.backgroundImage = `url('assets/bg-hero-icons-sm.jpg')`;
    } else if (window.innerWidth < 992) {
      // medium
      element.style.backgroundImage = `url('assets/bg-hero-icons-md.jpg')`;
    } else {
      // large
      element.style.backgroundImage = `url('assets/bg-hero-icons.jpg')`;
    }
  }

  scrollToForm() {
    const form = document.getElementById('about');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <div class="about">
        {/* header - hero */}
        <header class="hero">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-9 col-md-8 col-lg-9">
                <h2>We Are Passionate About Technology and Design</h2>
                <p>
                  We believe that your success is our success. We're here to
                  challenge your assumptions and help you discover your web or
                  mobile applications full potential.
                </p>
                <button
                  onClick={this.scrollToForm.bind(this)}
                  class="btn btn-primary"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* section - about */}
        <section id="about" class="about bg-gray">
          <div class="container">
            <div class="about--header">
              <h2>Meet the Team</h2>
              <p>
                There's no doubt that our team is made up of brilliant and
                talented individuals who are passionate about technology and
                design thinking. Together we design, code, grow, and evolve.
              </p>
            </div>

            <app-members members={this.members} />
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">Want to work with us?</span>
          <span slot="link">Get in touch</span>
        </app-cta>
      </div>
    );
  }
}
