import { Profession } from "@/data/professions";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SmartSuggestionsProps {
  profession: Profession;
  onAddSkill: (skill: string) => void;
  onAddBullet: (bullet: string) => void;
}

export function SmartSuggestions({ profession, onAddSkill, onAddBullet }: SmartSuggestionsProps) {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "You can now paste it into your form.",
    });
  };

  return (
    <div className="bg-white dark:bg-card rounded-xl border border-border shadow-sm flex flex-col overflow-hidden h-[600px]">
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <span className="p-1.5 bg-primary/10 text-primary rounded-md">
            <profession.icon className="w-4 h-4" />
          </span>
          Suggestions for {profession.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">Tailored content to help you stand out.</p>
      </div>

      <Tabs defaultValue="skills" className="flex-1 flex flex-col overflow-hidden">
        <TabsList className="w-full justify-start rounded-none border-b border-border h-12 bg-transparent p-0 px-2 gap-4">
          <TabsTrigger value="skills" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">Skills</TabsTrigger>
          <TabsTrigger value="bullets" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">Bullet Points</TabsTrigger>
          <TabsTrigger value="verbs" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">Action Verbs</TabsTrigger>
          <TabsTrigger value="projects" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-full">Projects</TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <TabsContent value="skills" className="m-0 focus-visible:outline-none">
            <div className="flex flex-wrap gap-2">
              {profession.skills.map((skill, i) => (
                <div key={i} className="group relative flex items-center bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-full hover:bg-secondary/80 transition-colors cursor-pointer" onClick={() => onAddSkill(skill)}>
                  <span>{skill}</span>
                  <div className="absolute right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-background rounded-full p-0.5 shadow-sm">
                    <PlusCircle className="w-3 h-3 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bullets" className="m-0 space-y-3 focus-visible:outline-none">
            {profession.bullets.map((bullet, i) => (
              <div key={i} className="group relative bg-muted/50 hover:bg-muted p-3 rounded-lg border border-border/50 text-sm text-foreground transition-colors cursor-pointer" onClick={() => onAddBullet(bullet)}>
                <p className="pr-6">{bullet}</p>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlusCircle className="w-4 h-4 text-primary" />
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="verbs" className="m-0 focus-visible:outline-none">
            <div className="grid grid-cols-2 gap-2">
              {profession.actionVerbs.map((verb, i) => (
                <div key={i} className="flex justify-between items-center bg-muted/50 hover:bg-muted p-2 rounded-md border border-border/50 text-sm text-foreground transition-colors cursor-pointer" onClick={() => handleCopy(verb)}>
                  <span>{verb}</span>
                  <Copy className="w-3 h-3 text-muted-foreground" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="m-0 space-y-4 focus-visible:outline-none">
            {profession.projects.map((proj, i) => (
              <div key={i} className="bg-muted/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-semibold text-sm text-foreground mb-1">{proj.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{proj.description}</p>
                <div className="text-xs font-medium text-primary mb-3">Tech: {proj.technologies}</div>
                <Button variant="outline" size="sm" className="w-full text-xs h-8" onClick={() => handleCopy(`${proj.title}\n${proj.description}\nTechnologies: ${proj.technologies}`)}>
                  Copy Details
                </Button>
              </div>
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
