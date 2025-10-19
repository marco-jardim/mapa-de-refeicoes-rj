import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { 
  ShareNetwork, 
  FacebookLogo, 
  XLogo, 
  WhatsappLogo, 
  TelegramLogo,
  InstagramLogo,
  TiktokLogo,
  Copy
} from '@phosphor-icons/react'
import { toast } from 'sonner'

export function ShareButton() {
  const [showPanel, setShowPanel] = useState(false)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = 'Mapa Solidário - Distribuição de Comida RJ'
  const shareText = 'Veja locais de distribuição gratuita de refeições para pessoas em situação de rua no Rio de Janeiro'

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl
        })
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Erro ao compartilhar:', err)
        }
      }
    } else {
      setShowPanel(!showPanel)
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast.success('Link copiado!', {
        description: 'Cole no Instagram ou TikTok para compartilhar'
      })
    } catch (err) {
      toast.error('Erro ao copiar link', {
        description: 'Tente novamente'
      })
    }
  }

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FacebookLogo,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#1877F2]'
    },
    {
      name: 'Twitter/X',
      icon: XLogo,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'hover:text-[#000000]'
    },
    {
      name: 'WhatsApp',
      icon: WhatsappLogo,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: 'hover:text-[#25D366]'
    },
    {
      name: 'Telegram',
      icon: TelegramLogo,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'hover:text-[#0088cc]'
    }
  ]

  const copyLinks = [
    {
      name: 'Instagram',
      icon: InstagramLogo,
      color: 'hover:text-[#E4405F]'
    },
    {
      name: 'TikTok',
      icon: TiktokLogo,
      color: 'hover:text-[#000000]'
    }
  ]

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end gap-3">
        {showPanel && !navigator.share && (
          <Card className="p-3 shadow-2xl animate-in slide-in-from-right duration-250 backdrop-blur-sm bg-card/95">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`h-12 w-12 transition-colors ${social.color}`}
                        onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                        aria-label={`Compartilhar no ${social.name}`}
                      >
                        <social.icon size={24} weight="fill" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
              
              <div className="border-t pt-2 mt-1">
                <p className="text-xs text-muted-foreground mb-2 text-center">
                  Copiar link para:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {copyLinks.map((social) => (
                    <Tooltip key={social.name}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`h-12 w-12 transition-colors ${social.color}`}
                          onClick={handleCopyLink}
                          aria-label={`Copiar link para ${social.name}`}
                        >
                          <social.icon size={24} weight="fill" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>{social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-12 w-12 hover:text-primary"
                        onClick={handleCopyLink}
                        aria-label="Copiar link"
                      >
                        <Copy size={24} weight="bold" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Copiar link</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </Card>
        )}
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleShare}
              size="lg"
              className="h-14 w-14 rounded-full shadow-2xl hover:scale-105 transition-transform bg-accent hover:bg-accent/90"
              aria-label="Compartilhar este mapa"
            >
              <ShareNetwork size={28} weight="fill" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Compartilhar</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
