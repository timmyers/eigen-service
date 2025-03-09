import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello super cool';
  }

  getSpaceFact(): { fact: string, image: string } {
    const facts = [
      {
        fact: "One million Earths could fit inside the Sun",
        image: "https://images.nasa.gov/details/GSFC_20171208_Archive_e001362"
      },
      {
        fact: "The footprints on the Moon will last for 100 million years",
        image: "https://images.nasa.gov/details/as11-40-5878"
      },
      {
        fact: "A day on Venus is longer than a year on Venus",
        image: "https://images.nasa.gov/details/PIA00271"
      },
      {
        fact: "The hottest planet is not the closest to the Sun",
        image: "https://images.nasa.gov/details/PIA23791"
      },
      {
        fact: "There is a planet made of diamonds",
        image: "https://images.nasa.gov/details/PIA03519"
      },
      {
        fact: "The Great Red Spot on Jupiter is a storm that has lasted over 300 years",
        image: "https://images.nasa.gov/details/GSFC_20171208_Archive_e000366"
      },
      {
        fact: "The Milky Way and Andromeda galaxies will collide in about 4.5 billion years",
        image: "https://images.nasa.gov/details/GSFC_20171208_Archive_e001490"
      }
    ];
    
    // Get a different fact based on the day of the year
    const dayOfYear = this.getDayOfYear();
    const factIndex = dayOfYear % facts.length;
    
    return facts[factIndex];
  }

  getCoolDemoData(): any {
    const spaceFact = this.getSpaceFact();
    
    return {
      message: "Welcome to the Eigen Space Explorer",
      spaceFact: spaceFact.fact,
      imageUrl: spaceFact.image,
      stats: {
        galaxies: Math.floor(Math.random() * 1000) + 2000,
        stars: Math.floor(Math.random() * 1000000) + 1000000,
        planets: Math.floor(Math.random() * 10000) + 5000,
        activeUsers: Math.floor(Math.random() * 100) + 50
      },
      serverStatus: "Operational",
      uptime: this.formatUptime(process.uptime())
    };
  }
  
  private getDayOfYear(): number {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }
  
  private formatUptime(uptime: number): string {
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}