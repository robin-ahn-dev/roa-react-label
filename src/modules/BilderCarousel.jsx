import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import {Card, Button, Input, Text } from "../components/-components";

function BilderCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [autoPlayDelay, setAutoPlayDelay] = useState(3000);

    // Beispielbilder (kann durch echte Daten ersetzt werden)
    const images = [
        { 
            id: 1, 
            url: "https://picsum.photos/800/500?random=1", 
            title: "Wunderschöne Landschaft",
            description: "Eine atemberaubende Aussicht auf die Berge"
        },
        { 
            id: 2, 
            url: "https://picsum.photos/800/500?random=2", 
            title: "Stadt bei Nacht",
            description: "Die Lichter der Stadt erleuchten die Dunkelheit"
        },
        { 
            id: 3, 
            url: "https://picsum.photos/800/500?random=3", 
            title: "Sonnenuntergang am Meer",
            description: "Ein friedlicher Moment am Strand"
        },
        { 
            id: 4, 
            url: "https://picsum.photos/800/500?random=4", 
            title: "Waldpfad",
            description: "Ein ruhiger Spaziergang durch den Wald"
        },
        { 
            id: 5, 
            url: "https://picsum.photos/800/500?random=5", 
            title: "Moderne Architektur",
            description: "Zeitgenössische Gebäude in der Stadt"
        },
    ];

    // Auto-Play Funktionalität
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, autoPlayDelay);
            return () => clearInterval(interval);
        }
    }, [isPlaying, autoPlayDelay, images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    const currentImage = images[currentIndex];

    return (
        <div className="w-full max-w-5xl mx-auto">
            <Card className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <Text type="h2" bold>Bilder Carousel</Text>
                        <Text type="small" color="muted">
                            Bild {currentIndex + 1} von {images.length}
                        </Text>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <Button
                            onlyIcon={isPlaying ? <Pause /> : <Play />}
                            type="accent"
                            onClick={() => setIsPlaying(!isPlaying)}
                            title={isPlaying ? "Pause" : "Abspielen"}
                        />
                    </div>
                </div>

                {/* Hauptbild */}
                <div className="relative w-full aspect-video bg-surfaceLightHl dark:bg-surfaceDarkHl rounded-lg overflow-hidden">
                    <img
                        src={currentImage.url}
                        alt={currentImage.title}
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Buttons */}
                    <Button
                        onlyIcon={<ChevronLeft />}
                        type="default"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                        onClick={goToPrevious}
                        title="Vorheriges Bild"
                    />
                    <Button
                        onlyIcon={<ChevronRight />}
                        type="default"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                        onClick={goToNext}
                        title="Nächstes Bild"
                    />
                </div>

                {/* Bildinfo */}
                <div className="flex flex-col gap-2">
                    <Text type="h3" bold>{currentImage.title}</Text>
                    <Text type="small" color="muted">{currentImage.description}</Text>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            onClick={() => goToImage(index)}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                index === currentIndex
                                    ? "border-primary dark:border-secondary scale-105"
                                    : "border-surfaceLightBorder dark:border-surfaceDarkBorder opacity-60 hover:opacity-100"
                            }`}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Radio Button Navigation */}
                <div className="flex items-center justify-center">
                    <Input
                        type="radio"
                        name="carousel-image"
                        options={images.map((img, index) => ({
                            value: index.toString(),
                            label: img.title
                        }))}
                        value={currentIndex.toString()}
                        onChange={(e) => goToImage(parseInt(e.target.value))}
                    />
                </div>

                {/* Auto-Play Einstellungen */}
                <Card className="bg-surfaceLightHl dark:bg-surfaceDarkHl">
                    <div className="flex flex-col gap-3">
                        <Text type="h4" bold>Auto-Play Einstellungen</Text>
                        
                        <div className="flex items-center gap-4">
                            <Input
                                type="switch"
                                switch="Auto-Play aktivieren"
                                checked={isPlaying}
                                onChange={(e) => setIsPlaying(e.target.checked)}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Text type="small">Geschwindigkeit:</Text>
                            <Input
                                type="radio"
                                name="delay"
                                options={[
                                    { value: "2000", label: "Schnell (2s)" },
                                    { value: "3000", label: "Normal (3s)" },
                                    { value: "5000", label: "Langsam (5s)" },
                                ]}
                                value={autoPlayDelay.toString()}
                                onChange={(e) => setAutoPlayDelay(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                </Card>
            </Card>
        </div>
    );
}

export default BilderCarousel;
