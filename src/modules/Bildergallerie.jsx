import React, { useState } from "react";
import { Grid3x3, List, Upload, X, Search } from "lucide-react";
import { Card, Button, Input, Text, Select, FileUpload } from "../components/-components";

function Bildergallerie() {
    const [viewMode, setViewMode] = useState("grid"); // "grid" oder "list"
    const [sortBy, setSortBy] = useState("date");
    const [searchQuery, setSearchQuery] = useState("");
    const [showUpload, setShowUpload] = useState(false);
    
    // Beispielbilder (kann durch echte Daten ersetzt werden)
    const [images, setImages] = useState([
        { id: 1, url: "https://picsum.photos/400/300?random=1", title: "Bild 1", date: "2024-01-15" },
        { id: 2, url: "https://picsum.photos/400/300?random=2", title: "Bild 2", date: "2024-01-16" },
        { id: 3, url: "https://picsum.photos/400/300?random=3", title: "Bild 3", date: "2024-01-17" },
        { id: 4, url: "https://picsum.photos/400/300?random=4", title: "Bild 4", date: "2024-01-18" },
        { id: 5, url: "https://picsum.photos/400/300?random=5", title: "Bild 5", date: "2024-01-19" },
        { id: 6, url: "https://picsum.photos/400/300?random=6", title: "Bild 6", date: "2024-01-20" },
    ]);

    const sortOptions = [
        { value: "date", label: "Nach Datum" },
        { value: "title", label: "Nach Titel" },
        { value: "newest", label: "Neueste zuerst" },
    ];

    const filteredImages = images.filter(img => 
        img.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDeleteImage = (id) => {
        setImages(images.filter(img => img.id !== id));
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <Card className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <Text type="h2" bold>Bildergallerie</Text>
                        <Text type="small" color="muted">
                            {filteredImages.length} {filteredImages.length === 1 ? "Bild" : "Bilder"}
                        </Text>
                    </div>
                    
                    <Button
                        type="accent"
                        text="Bild hochladen"
                        iconLeft={<Upload />}
                        onClick={() => setShowUpload(!showUpload)}
                    />
                </div>

                {/* Upload Bereich */}
                {showUpload && (
                    <Card className="bg-surfaceLightHl dark:bg-surfaceDarkHl">
                        <div className="flex items-center justify-between mb-4">
                            <Text type="h4" bold>Neues Bild hochladen</Text>
                            <Button
                                onlyIcon={<X />}
                                type="error"
                                onClick={() => setShowUpload(false)}
                            />
                        </div>
                        <FileUpload />
                    </Card>
                )}

                {/* Filter und Sortierung */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex-1 w-full sm:w-auto">
                        <Input
                            type="text"
                            placeholder="Bilder durchsuchen..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            full
                            button={<Search className="w-4 h-4" />}
                        />
                    </div>

                    <Select
                        options={sortOptions}
                        selectedValue={sortBy}
                        onSelect={setSortBy}
                        label="Sortieren"
                    />

                    <div className="flex items-center gap-2">
                        <Text type="small" color="muted">Ansicht:</Text>
                        <Button
                            onlyIcon={<Grid3x3 />}
                            type={viewMode === "grid" ? "default" : "accent"}
                            outline={viewMode !== "grid"}
                            onClick={() => setViewMode("grid")}
                            title="Rasteransicht"
                        />
                        <Button
                            onlyIcon={<List />}
                            type={viewMode === "list" ? "default" : "accent"}
                            outline={viewMode !== "list"}
                            onClick={() => setViewMode("list")}
                            title="Listenansicht"
                        />
                    </div>
                </div>

                {/* Bildergrid/Liste */}
                {filteredImages.length === 0 ? (
                    <Card className="text-center py-12">
                        <Text type="h4" color="muted">Keine Bilder gefunden</Text>
                        <Text type="small" color="muted" className="mt-2">
                            {searchQuery ? "Versuche eine andere Suche" : "Lade dein erstes Bild hoch"}
                        </Text>
                    </Card>
                ) : (
                    <div className={
                        viewMode === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                            : "flex flex-col gap-4"
                    }>
                        {filteredImages.map((image) => (
                            <Card key={image.id} className="relative group overflow-hidden">
                                <div className={`relative ${viewMode === "list" ? "flex gap-4" : ""}`}>
                                    <div className={`${viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "w-full aspect-video"} overflow-hidden rounded-lg`}>
                                        <img
                                            src={image.url}
                                            alt={image.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    <div className={`${viewMode === "list" ? "flex-1" : "mt-3"} flex flex-col gap-2`}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <Text type="h4" bold>{image.title}</Text>
                                                <Text type="small" color="muted">{image.date}</Text>
                                            </div>
                                            <Button
                                                onlyIcon={<X />}
                                                type="error"
                                                small
                                                onClick={() => handleDeleteImage(image.id)}
                                                title="Bild löschen"
                                            />
                                        </div>
                                        
                                        {viewMode === "list" && (
                                            <div className="flex gap-2 mt-2">
                                                <Button
                                                    text="Bearbeiten"
                                                    type="accent"
                                                    outline
                                                    small
                                                />
                                                <Button
                                                    text="Herunterladen"
                                                    type="default"
                                                    outline
                                                    small
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </Card>
        </div>
    );
}

export default Bildergallerie;
